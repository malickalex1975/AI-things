import { Component } from '@angular/core';
import { Lang, availableLanguages } from 'src/app/constants';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent {
lang$= this.languageService.getLanguage()

constructor(private languageService:LanguageService){

}
changeLanguage(){
  let currentLanguage= this.languageService.currentLanguage
  let index=availableLanguages.findIndex(val=>val===currentLanguage);
  let newIndex=(index+1)<=availableLanguages.length-1?index+1:0
  let newLang= availableLanguages[newIndex]
  this.languageService.setLanguage(newLang)
}
}
