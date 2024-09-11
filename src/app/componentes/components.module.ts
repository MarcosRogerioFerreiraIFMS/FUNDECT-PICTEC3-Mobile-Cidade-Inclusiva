import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';
import { SwiperComponent } from './swiper/swiper.component';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [MenuTabsComponent, RatingComponent, SwiperComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuTabsComponent, RatingComponent, SwiperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
