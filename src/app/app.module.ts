import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { PrimengModule } from './shared/modules/primeng/primeng.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BurgerComponent } from './components/burger/burger.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BurgerComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PrimengModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
