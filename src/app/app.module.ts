import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from './shared/modules/primeng/primeng.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BurgerComponent } from './components/burger/burger.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BurgerComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent,
    NotFoundComponent,
    ProductCardComponent,
    SmartphonesComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PrimengModule,
    HammerModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
