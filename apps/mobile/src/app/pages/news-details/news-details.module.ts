import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NewsDetailsPage } from './news-details.page';
import { NewsDetailsPageRoutingModule } from './news-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageRoutingModule,
  ],
  declarations: [NewsDetailsPage],
})
export class NewsDetailsPageModule {}
