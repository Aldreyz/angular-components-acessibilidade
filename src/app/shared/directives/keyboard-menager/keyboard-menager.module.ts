import { KeyboardMenagedItemDirective } from './keyboard-menaged-item.directive';
import { KeyboardMenagerDirective } from './keyboard-menager.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [KeyboardMenagerDirective, KeyboardMenagedItemDirective],
  imports: [CommonModule],
  exports: [KeyboardMenagerDirective , KeyboardMenagedItemDirective],
})
export class KeyboardMenagerModule {}
