import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CategoryPageRoutingModule } from './category-routing.module';
import { CategoryPage } from './category.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CategoryPageRoutingModule],
  declarations: [CategoryPage],
})
export class CategoryPageModule {}
