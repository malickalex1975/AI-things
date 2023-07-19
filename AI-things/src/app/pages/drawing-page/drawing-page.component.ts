import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subject,
  catchError,
  debounceTime,
  distinct,
  distinctUntilChanged,
  filter,
  interval,
  of,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { API_KEY, DRAWING_AI_URL, TITLE_1 } from 'src/app/constants';
import { HttpService } from 'src/app/services/http.service';
import { MicrophoneBusyService } from 'src/app/services/microphone-busy.service';
import { PromptService } from 'src/app/services/prompt.service';
import { ShowLoadingService } from 'src/app/services/show-loading.service';

@Component({
  selector: 'app-drawing-page',
  templateUrl: './drawing-page.component.html',
  styleUrls: ['./drawing-page.component.scss'],
})
export class DrawingPageComponent implements OnInit,OnDestroy {
  title = TITLE_1;
  prompt: string = '';
  prompt$ = this.promptService.getPrompt();
  alt$ = new Subject<any>();
  placeholder: string = 'type...';
  src: string = '';
  isVisible = true;
  subscription:any
  isMicrophoneBusy$= this.microphoneBusyService.getMicrophoneBusySubject();
  isMicrophoneBusy:boolean=false;
  constructor(
    private httpService: HttpService,
    private showLoadingService: ShowLoadingService,
    private promptService: PromptService,
    private microphoneBusyService:MicrophoneBusyService
  ) {}
 
ngOnInit(): void {
  this.listenInput();
  this.subscription= this.isMicrophoneBusy$.subscribe((val)=>this.isMicrophoneBusy=val)
}
  listenInput(): void {
    this.prompt$
      .pipe(
        filter((val) => val !== ''),
        tap((val) => {
          this.showLoadingService.hide();
          this.isVisible = true;
          this.prompt = val;
        }),
        debounceTime(1000),
        distinct(),
        tap(() => {
          this.showLoadingService.show();
          this.isVisible = false;
        }),
        switchMap((val: any) => {
          console.log(val);
          const body = JSON.stringify({
            user_app_id: {
              user_id: 'borisdayma',
              app_id: 'generative-art',
            },
            inputs: [
              {
                data: {
                  text: {
                    raw: val,
                  },
                },
              },
            ],
          });

          const options = {
            headers: {
              Accept: 'application/json',
              Authorization: 'Key '+ API_KEY,
            },
          };
          return this.httpService.postData(DRAWING_AI_URL, body, options);
        }),
        catchError((err) => {
          console.log(err);
          this.showLoadingService.hide();
          this.isVisible = true;
          this.processData(null, true);
          this.listenInput()
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isVisible = true;
          this.showLoadingService.hide();
          this.processData(data);
        },
        error: (err) => {
          console.log(err);
          this.showLoadingService.hide();
          this.isVisible = true;
          this.processData(null, true);
        },
      });
  }

  setPrompt() {
    if (this.prompt.trim().length >= 3) {
      this.promptService.setPrompt(this.prompt);
      this.alt$.next(this.prompt);
    }
  }

  processData(data: any, isError = false) {
    let errorMessageArray = ['Error!', 'Try again!', this.prompt];
    let index = 0;
    if (!isError && data) {
      let img = data?.outputs?.[0]?.data?.image?.base64;
      if (img) {
        this.src = `data:image/png;base64,${img}`;
      }
    } else if (isError) {
      let sub = timer(0,2000)
        .pipe(
          take(3),
          switchMap(() => of(errorMessageArray[index])),
          tap(() => index++),
          tap((val) => this.alt$.next(val))
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
