import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyboardMenagerDirective {
  @HostListener('keyup', ['$event'])
  public menageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
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
