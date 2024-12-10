import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { RecommendationDto } from '../recommendations/recommendation-dto.model';
import { RecommendationPriorityDirective } from './recommendation-priority.directive';

@Component({
  selector: 'app-recommendation-card',
  imports: [CommonModule, MatCardModule, RecommendationPriorityDirective],
  templateUrl: './recommendation-card.component.html',
  styleUrl: './recommendation-card.component.scss'
})
export class RecommendationCardComponent {
  @Input() public recommendation!: RecommendationDto;

}
