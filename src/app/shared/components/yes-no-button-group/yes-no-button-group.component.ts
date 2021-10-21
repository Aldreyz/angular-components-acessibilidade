import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor{
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = yesNoButtonGroupOptions;
  public onChange =(value:string)=>{};
  public OnTouched = ()=>{}

  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  public registerOnChange(fn:(value:string)=> void): void {
     this.onChange = fn;
  }

  public registerOnTouched(fn:()=>void): void {
    this.OnTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

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
