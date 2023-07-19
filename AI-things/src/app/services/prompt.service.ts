import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
prompt$= new Subject<string>()
  constructor() { }
  setPrompt(value:string){
    this.prompt$.next(value)
  }
  getPrompt(){
    return this.prompt$
  }
}
