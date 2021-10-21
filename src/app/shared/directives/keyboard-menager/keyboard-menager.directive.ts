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
        console.log('up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }
  public moveFocus(direction: ArrowDirection): KeyboardMenagedItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }
    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}
enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
