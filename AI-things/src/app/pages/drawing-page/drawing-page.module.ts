import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingPageRoutingModule } from './drawing-page-routing.module';
import { DrawingPageComponent } from './drawing-page.component';
import { FormsModule } from '@angular/forms';
import { MicrophoneComponent } from 'src/app/components/microphone/microphone.component';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [DrawingPageComponent,MicrophoneComponent,],
  imports: [CommonModule, DrawingPageRoutingModule, FormsModule, CoreModule],
  exports: [DrawingPageComponent],
})
export class DrawingPageModule {}
