import { Activity } from './../../models/Activity';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.css'],
})
export class FavoriteActivityComponent implements OnInit {
  @Input() activityList!: Activity[];

  constructor() {}

  ngOnInit(): void {

  }

  public remove(activity: Activity): void {
    this.activityList.splice(this.activityList.indexOf(activity), 1);
    localStorage.removeItem('activityList');
    localStorage.setItem('activityList', JSON.stringify(this.activityList));
  }

  public color(activity: Activity) {
    if (activity.accessibility > 0.5) {
      return 'table-success';
    } else if (activity.accessibility < 0.3) {
      return 'table-warning';
    } else {
      return 'table-danger';
    }
  }
}
