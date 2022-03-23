import { GenerateActivityComponent } from './generate-activity/generate-activity.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteActivityComponent } from './favorite-activity/favorite-activity.component';

@NgModule({
  declarations: [HomeComponent, GenerateActivityComponent, FavoriteActivityComponent],
  imports: [CommonModule, SharedModule],
})
export class HomeModule {}
