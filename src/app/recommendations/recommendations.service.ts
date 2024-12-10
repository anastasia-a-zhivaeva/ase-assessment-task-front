import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';
import { HealthData } from '../health-data/health-data.model';
import { RecommendationDto } from './recommendation-dto.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  private httpClient = inject(HttpClient);

  private recommendationSubject$ = new BehaviorSubject<Array<RecommendationDto>>([]);

  public recommendations$ = this.recommendationSubject$.asObservable();

  public getRecommendations(healthData: HealthData): void {
    this.recommendationSubject$.next([]);
    this.httpClient.post<Array<RecommendationDto>>(`${environment.apiUrl}/recommendation`, healthData)
      .subscribe(recommendations => this.recommendationSubject$.next(recommendations));
  }
}
