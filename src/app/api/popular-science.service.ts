import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8', 'x-auth-token': 'e1777215-7633-4be9-bf82-3d2a7aa60f82' })
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
