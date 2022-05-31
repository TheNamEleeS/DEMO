import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetNameOut } from '../model/get-name-output.model';

@Injectable({
  providedIn: 'root',
})
export class CommonApiService {
  constructor(private httpClient: HttpClient) {}

  getUserData(id: string): Observable<GetNameOut> {
    const params = new HttpParams().set('ID', id);
    return this.httpClient.post('https://demoService/api/', { params });
  }
}
