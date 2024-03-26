import { Injectable } from '@angular/core';
import { enviroments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Energy } from '../../interfaces/energy/Energy';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  private API_URL = enviroments.API_URL
  constructor(private http: HttpClient) { }

  getEnergy(): Observable<Energy[]> {
    return this.http.get<Energy[]>(`${this.API_URL}/api/energy/`).pipe();
  }
}
