import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') tooltipText!: string;
  tooltipElement!: Element;

  @HostBinding('class.tooltip') className = true;

  @HostListener('mouseenter') onHover() {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = 'tooltip-element';
    this.tooltipElement.textContent = this.tooltipText;
    this.element.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave') onLeave() {
    this.element.nativeElement.removeChild(this.tooltipElement);
  }

  constructor(private element: ElementRef) {
  }
}
