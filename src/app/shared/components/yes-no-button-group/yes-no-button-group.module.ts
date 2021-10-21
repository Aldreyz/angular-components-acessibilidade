import { KeyboardMenagerModule } from './../../directives/keyboard-menager/keyboard-menager.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule , KeyboardMenagerModule],
  exports:[YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule {}
