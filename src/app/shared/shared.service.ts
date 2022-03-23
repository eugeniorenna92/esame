import { Activity } from './../models/Activity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  public generateActivity(): Observable<Activity> {
    return this.http.get(
      'https://www.boredapi.com/api/activity/'
    ) as Observable<Activity>;
  }
}
