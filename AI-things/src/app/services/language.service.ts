import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
 
currentLanguage='en'
language$= new BehaviorSubject<string>('en')
  constructor() { }
  setLanguage(lang:Lang){
    this.currentLanguage=lang;
    this.language$.next(lang)
  }
  getLanguage=()=>this.language$
    
  }
