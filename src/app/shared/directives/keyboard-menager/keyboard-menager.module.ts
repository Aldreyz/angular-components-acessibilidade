import { KeyboardMenagerDirective } from './keyboard-menager.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[KeyboardMenagerDirective],
  imports:[CommonModule],
  exports:[ KeyboardMenagerDirective],

})
export class KeyboardMenagerModule{}
