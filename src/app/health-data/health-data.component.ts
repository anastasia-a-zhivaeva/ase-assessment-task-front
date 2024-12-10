import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { HealthData } from './health-data.model';
import { HealthDataService } from './health-data.service';

@Component({
  selector: 'app-health-data',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './health-data.component.html',
  styleUrl: './health-data.component.scss'
})
export class HealthDataComponent implements OnInit {
  private readonly healthDataService = inject(HealthDataService);
  private readonly router = inject(Router);

  protected healthDataForm = new FormGroup({
    weight: new FormControl('', { validators: [Validators.required, Validators.min(1)] }),
    height: new FormControl('', { validators: [Validators.required, Validators.min(1)] }),
    dateOfBirth: new FormControl('', { validators: [Validators.required] }),
  })

  public ngOnInit(): void {
    const healthData = this.healthDataService.getHealthData();
    if (healthData) {
      this.healthDataForm.setValue({
        weight: healthData.weight.toString(),
        height: healthData.height.toString(),
        dateOfBirth: healthData.dateOfBirth
      });
    }
  }

  protected onSubmit() {
    this.healthDataService.addHealthData(<HealthData><unknown>this.healthDataForm.value);
    this.router.navigate(["recommendations"]);
  }
}
