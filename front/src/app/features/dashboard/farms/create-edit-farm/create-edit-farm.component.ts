import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { FarmService } from '../service/farm.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-farm',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-edit-farm.component.html',
  styleUrl: './create-edit-farm.component.css'
})
export class CreateEditFarmComponent {
  farmForm: FormGroup;
  loading = signal(false);

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private router: Router
  ) {
    this.farmForm = this.formBuilder.group({
      name: [''],
      location: [''],
      owner: [''],
      size: [],
      type: [''],
      sectors: this.formBuilder.array([])
    });
  }

  get sectors(): FormArray {
    return this.farmForm.get('sectors') as FormArray;
  }

  addSector() {    
    const sectorGroup = this.formBuilder.group({
      name: [''],
      size: []
    });
    this.sectors.push(sectorGroup);
  }

  removeSector(index: number) {
    this.sectors.removeAt(index);
  }

  onSubmit() {
    this.loading.set(true);
    if (this.farmForm.valid) {
      const farmData = this.farmForm.value;
      console.log('Farm data:', farmData);
      
      this.farmService.createFarm(farmData).subscribe({
        next: (response) => {
          console.log('Farm created successfully:', response);
          this.loading.set(false);
          this.farmForm.reset();
          this.router.navigate(['/']); // Navigate to the farms list after creation
        },
        error: (error) => {
          console.error('Error creating farm:', error);
          this.loading.set(false);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
