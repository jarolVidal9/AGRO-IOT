import { Component, signal } from '@angular/core';
import { CreateEditFarmComponent } from './create-edit-farm/create-edit-farm.component';
import { FarmService } from './service/farm.service';
import { Farm } from './interfaces/farm';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-farms',
  imports: [ RouterLink],
  templateUrl: './farms.component.html',
  styleUrl: './farms.component.css'
})
export class FarmsComponent {
  farms: Farm[] = [];
  loading = signal(false);
  constructor(
    private farmService: FarmService
  ){

  }

  ngOnInit() {
    this.farmService.getFarms().subscribe({
      next: (farms) => (this.farms = farms),
      error: (error) => console.error('Error fetching farms:', error)
    });
  }

  deleteFarm(id: string) {
    this.loading.set(true);
    this.farmService.deleteFarm(id).subscribe({
      next: () => {
        this.farms = this.farms.filter(farm => farm.id !== id);
        console.log('Farm deleted successfully');
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error deleting farm:', error);
        this.loading.set(false);
      }
    });
  }

}
