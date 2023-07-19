import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MicrophoneBusyService {
  isMicropfoneBusy$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  setMicrophoneBusy = (val: boolean) => {
    this.isMicropfoneBusy$.next(val);
  };
  getMicrophoneBusySubject = () => this.isMicropfoneBusy$;
}
