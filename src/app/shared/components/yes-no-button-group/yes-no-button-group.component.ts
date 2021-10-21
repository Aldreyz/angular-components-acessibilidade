import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = yesNoButtonGroupOptions;

  constructor() {}

  ngOnInit(): void {}

  public activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
enum yesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
