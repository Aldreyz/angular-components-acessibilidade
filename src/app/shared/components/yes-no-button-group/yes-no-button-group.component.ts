import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input()public value:string=null;
  @Input()public label ='';
  public options = yesNoButtonGroupOptions;
  constructor() { }

  ngOnInit(): void {
  }
  public activate(value:string){
    this.value = value;
  }
}
enum yesNoButtonGroupOptions{
   YES = 'yes',
   NO ='no'
}
