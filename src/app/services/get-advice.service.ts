import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advice } from '../interfaces/advice';

@Injectable({
  providedIn: 'root',
})
export class GetAdviceService {
  constructor(private http: HttpClient) {}

  serviceUrl = 'https://api.adviceslip.com/advice';

  getAdvice(): Observable<Advice> {
    return this.http.get<Advice>(this.serviceUrl);
  }
}