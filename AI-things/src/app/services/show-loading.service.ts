import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowLoadingService {
  isLoading$ = new BehaviorSubject(false);
  isLoading = false;
  constructor() {}
  show() {
    this.isLoading$.next(true);
    this.isLoading = true;
  }
  hide() {
    this.isLoading$.next(false);
    this.isLoading = false;
  }
  getLoadingVisibility() {
    return this.isLoading$;
  }
}
