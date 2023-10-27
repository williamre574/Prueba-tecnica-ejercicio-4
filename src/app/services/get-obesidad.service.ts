import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetObesidadService {
  constructor(public http:HttpClient) { }
  getUser() {
    const url = environment.getObesidad;
    return this.http.get(url);
  }
  mayor() {
    const url = environment.mayor;
    return this.http.get(url);
  }
  menor() {
    const url = environment.menor;
    return this.http.get(url);
  }
  promedio() {
    const url = environment.promedio;
    return this.http.get(url);
  }

}
