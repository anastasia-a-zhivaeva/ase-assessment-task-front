import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { HealthDataService } from '../health-data/health-data.service';
import { RecommendationCardComponent } from '../recommendation-card/recommendation-card.component';
import { RecommendationsService } from './recommendations.service';

@Component({
  selector: 'app-recommendations',
  imports: [CommonModule, RecommendationCardComponent],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent implements OnInit {
  private readonly recommendationService = inject(RecommendationsService);
  private readonly healthDataService = inject(HealthDataService);

  protected recommendations$ = this.recommendationService.recommendations$;

  public ngOnInit(): void {
    const healthData = this.healthDataService.getHealthData();
    if (healthData) {
      this.recommendationService.getRecommendations(healthData);
    }
  }
}
