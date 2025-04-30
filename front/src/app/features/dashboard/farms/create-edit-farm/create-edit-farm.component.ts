import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { FarmService } from '../service/farm.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-farm',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-edit-farm.component.html',
  styleUrl: './create-edit-farm.component.css'
})
export class CreateEditFarmComponent {
  farmForm: FormGroup;
  loading = signal(false);
  farmId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.farmForm = this.formBuilder.group({
      name: [''],
      location: [''],
      owner: [''],
      size: [],
      type: [''],
      sectors: this.formBuilder.array([])
    });

    // Check if there's an ID in the route
    this.route.paramMap.subscribe(params => {
      this.farmId = params.get('id');
      if (this.farmId) {
        this.loadFarmData(this.farmId);
      }
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

  loadFarmData(id: string) {
    this.loading.set(true);
    this.farmService.getFarm(id).subscribe({
      next: (farm) => {
        this.farmForm.patchValue(farm);
        if (farm.sectors) {
          farm.sectors.forEach((sector: any) => {
            const sectorGroup = this.formBuilder.group({
              name: [sector.name],
              size: [sector.size]
            });
            this.sectors.push(sectorGroup);
          });
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading farm data:', error);
        this.loading.set(false);
      }
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.farmForm.valid) {
      const farmData = this.farmForm.value;
      console.log('Farm data:', farmData);

      if (this.farmId) {
        // Update existing farm
        this.farmService.updateFarm(this.farmId, farmData).subscribe({
          next: (response) => {
            console.log('Farm updated successfully:', response);
            this.loading.set(false);
            this.router.navigate(['/']); // Navigate to the farms list after update
          },
          error: (error) => {
            console.error('Error updating farm:', error);
            this.loading.set(false);
          }
        });
      } else {
        // Create new farm
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
      }
    } else {
      console.error('Form is invalid');
    }
  }
}
