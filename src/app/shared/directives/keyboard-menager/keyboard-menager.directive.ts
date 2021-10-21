import { KeyboardMenagedItemDirective } from './keyboard-menaged-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyboardMenagerDirective {

  @ContentChildren(KeyboardMenagedItemDirective)
  public items: QueryList<KeyboardMenagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public menageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
    }
  }
}
