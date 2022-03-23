import { Activity } from './../../models/Activity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activityList: Activity[] = [];
  constructor() {}

  ngOnInit(): void {
    try {
      const storage = localStorage.getItem('activityList');
      if (storage != null) this.activityList = JSON.parse(storage);
    } catch (error) {
      console.error(error);
    }
  }

  public addFav(activity: Activity): void {
    this.activityList.push(activity);
    localStorage.setItem('activityList', JSON.stringify(this.activityList));
  }
}
