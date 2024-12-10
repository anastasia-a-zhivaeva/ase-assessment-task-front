import { ElementRef } from '@angular/core';
import { RecommendationPriorityDirective } from './recommendation-priority.directive';

describe('RecommendationPriorityDirective', () => {
  it('should create an instance', () => {
    const directive = new RecommendationPriorityDirective(<ElementRef>{});
    expect(directive).toBeTruthy();
  });
});
