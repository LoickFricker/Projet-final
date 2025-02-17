import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = `${environment.apiUrl}/appointments`;

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getAvailabilities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/availabilities`);
  }

  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post(this.apiUrl, appointmentData);
  }
  
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
