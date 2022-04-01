import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  /**
   * This method returns students details
   */
  public getPatientsInformation(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>("https://alexgr.ro/ehealth/patients.json");
  }
}
