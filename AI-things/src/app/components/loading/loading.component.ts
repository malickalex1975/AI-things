import { Component, OnInit } from '@angular/core';
import { Subscription, filter, interval, switchMap, take, tap, timer } from 'rxjs';
import { ShowLoadingService } from 'src/app/services/show-loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  isLoading$ = this.showLoadingService.getLoadingVisibility();
  isElement: boolean[] = [false, false, false, false];

  constructor(private showLoadingService: ShowLoadingService) {}
  ngOnInit(): void {
    this.isLoading$
      .pipe(
        filter((val) => val === true),
        switchMap(() => timer(0,1000)),
        switchMap(() => timer(0,200))
      )
      .subscribe((data) => {
       
        for(let index=0; index<4; index++) {
          if (index === data) {
            this.isElement[index] = true;
          } else {
            this.isElement[index] = false;
          };
         
  };
      });
  }
  
}
