import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [ CarouselModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
 
  
}


  






