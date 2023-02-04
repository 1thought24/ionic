import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getData(url :any) {
    return this.http.get(url).pipe(map((data) => data));
  }

  sendData(url:any, data:any) {
    return this.http.post(url, data).pipe(map((result) => result));
  }



}
