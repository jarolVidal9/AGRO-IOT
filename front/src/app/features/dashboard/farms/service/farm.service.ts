import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../enviroment/enviroment';
import { Farm } from '../interfaces/farm';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  apiUrl = environment.apiUrl + '/farm'
  constructor(
    private http: HttpClient
  ) { }
  getFarms() {
    return this.http.get<Farm[]>(`${this.apiUrl}`)
  }
  getFarm(id: string) {
    return this.http.get<Farm>(`${this.apiUrl}/${id}`)
  }
  createFarm(farm: any) {
    return this.http.post(`${this.apiUrl}`, farm)
  }
  updateFarm(id: string, farm: any) {
    return this.http.put(`${this.apiUrl}/${id}`, farm)
  }
  deleteFarm(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
