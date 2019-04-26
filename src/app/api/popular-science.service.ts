import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8', 'x-auth-token': 'c8528d8c-6d64-4223-853b-45d0257b0f83' })
}

@Injectable({
  providedIn: 'root'
})

export class PopularScienceService {

  constructor(
    public http: HttpClient
  ) { }

  getTableData(data = null){
    return this.http.post(`${environment.API_URL}/opsapi/cms/science/byCriteria`, data, httpOptions)
  }
}
