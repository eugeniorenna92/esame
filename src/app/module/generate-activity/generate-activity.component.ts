import { SharedService } from './../../shared/shared.service';
import { Activity } from './../../models/Activity';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.css'],
})
export class GenerateActivityComponent implements OnInit {
  activity!: Activity;
  @Output() favorited = new EventEmitter<Activity>();
  constructor(private service: SharedService) {}

  ngOnInit(): void {}

  public generate(): void {
    this.service.generateActivity().subscribe((data) => {
      this.activity = data;
      console.log(data);
    });
  }

  public favorite(activity: Activity): void {
    this.favorited.emit(activity);
  }
}
