import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HealthDataService } from './health-data/health-data.service';
import { RecommendationsService } from './recommendations/recommendations.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private recommendationService = inject(RecommendationsService);
  private healthDataService = inject(HealthDataService);

  public title = 'Health and Activity Recommender';

  public onRefresh() {
    const healthData = this.healthDataService.getHealthData();
    if (healthData) {
      this.recommendationService.getRecommendations(healthData);
    }
  }
}
