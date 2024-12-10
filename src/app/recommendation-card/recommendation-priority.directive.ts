import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRecommendationPriority]'
})
export class RecommendationPriorityDirective implements OnChanges {
  @Input() public priority!: number;

  constructor(private el: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.priority > 800) {
      this.el.nativeElement.style.borderColor = "red";
    } else if (this.priority > 400) {
      this.el.nativeElement.style.borderColor = "yellow";
    } else {
      this.el.nativeElement.style.borderColor = "green";
    }
  }
}
