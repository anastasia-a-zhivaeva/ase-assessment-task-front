import { Routes } from '@angular/router';

import { inject } from '@angular/core';
import { HealthDataComponent } from './health-data/health-data.component';
import { HealthDataService } from './health-data/health-data.service';
import { RecommendationsComponent } from './recommendations/recommendations.component';

export const routes: Routes = [
  { path: "health-data", component: HealthDataComponent },
  { path: "recommendations", component: RecommendationsComponent },
  {
    path: "**", redirectTo: () => {
      const healthDataService = inject(HealthDataService);
      if (healthDataService.getHealthData())
      {
        return "recommendations";
      }

      return "health-data";
    }
  }
];
