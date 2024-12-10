import { Injectable } from '@angular/core';
import { HealthData } from './health-data.model';

/**
 * Stores health data in LocalStorage for simplicity
 */
@Injectable({
  providedIn: 'root'
})
export class HealthDataService {
  public addHealthData(healthData: HealthData) {
    localStorage.setItem("health-data", JSON.stringify(healthData));
  }

  public getHealthData(): HealthData {
    const healthDataString = localStorage.getItem("health-data")
    return healthDataString ? JSON.parse(healthDataString) : null;
  }
}
