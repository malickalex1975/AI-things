import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { DrawingPageModule } from './pages/drawing-page/drawing-page.module';
import { LoadingComponent } from './components/loading/loading.component';
import { MicrophoneComponent } from './components/microphone/microphone.component';
import { LanguageButtonComponent } from './components/language-button/language-button.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    LanguageButtonComponent,
    NotFoundComponent,
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
