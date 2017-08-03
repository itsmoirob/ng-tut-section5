import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  @Input() format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus () {
    console.log('on focus');
  }

  @HostListener('blur') onBlur () {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lowecase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }


}
