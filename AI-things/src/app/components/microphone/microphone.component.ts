import { Component, OnDestroy, OnInit } from '@angular/core';
import { MicrophoneBusyService } from 'src/app/services/microphone-busy.service';
import { PromptService } from 'src/app/services/prompt.service';
import { ShowLoadingService } from 'src/app/services/show-loading.service';
const { Speech } = require('src/assets/scripts/speech.js');

@Component({
  selector: 'app-microphone',
  templateUrl: './microphone.component.html',
  styleUrls: ['./microphone.component.scss'],
})
export class MicrophoneComponent  implements OnInit, OnDestroy{
  constructor(
    private promptService: PromptService,
    private showLoadingService: ShowLoadingService,
    private microphoneBusyService:MicrophoneBusyService
  ) {}
  
  
  speech = new Speech('en');
  isPassive = false;
  isLoading$= this.showLoadingService.getLoadingVisibility();
  isloading:boolean=false;
  subscription:any;


  ngOnInit(): void {
    this.subscription==this.isLoading$.subscribe({next:val=>this.isloading=val})
  }
  listen() {
    if(!this.isPassive && !this.isloading){
    this.isPassive=true;
    this.microphoneBusyService.setMicrophoneBusy(true)
    this.speech
      .speechRecognition()
      .then((result: any) => {
        this.isPassive = false;
        this.microphoneBusyService.setMicrophoneBusy(false)
        this.processResult(result);
      })
      .catch((err: any) => {
        console.log(err);
        this.isPassive = false;
        this.microphoneBusyService.setMicrophoneBusy(false)
        this.processResult({ phrase: '' });
      });
    }
  }
  processResult(result: { phrase: string }) {
    this.promptService.setPrompt(result.phrase);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
