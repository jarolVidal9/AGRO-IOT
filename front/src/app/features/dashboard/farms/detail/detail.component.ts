import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmService } from '../service/farm.service';
import { Farm } from '../interfaces/farm';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  farm: Farm | null = null; 
  constructor(private route: ActivatedRoute,
    private farmService: FarmService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');    
    if (id) {
      this.farmService.getFarm(id).subscribe({
        next: (farm) => {
          this.farm = farm;
          console.log('Farm details:', farm);
        },
        error: (error) => {
          console.error('Error fetching farm details:', error);
        }
      });
 
    }
  }
}
