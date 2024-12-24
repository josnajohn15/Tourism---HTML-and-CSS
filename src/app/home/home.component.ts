import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [NgFor, CarouselModule, NavbarComponent],
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
  cimages=[
   {
    id: 1,
    alt:'Brentwood',
    src:'https://images.creativemarket.com/0.1.0/ps/7901649/1897/1265/m1/fpnw/wm0/creativee-04-.jpg?1583899404&s=3c84cc2691e5c44f6326ac343fb467b9'

   },
   
  {
    id: 2,
    alt:'Anoka',
    src:'http://ts4.mm.bing.net/th?id=OIP.sttFTW_zSURPXXbfzAh_vwHaHa&pid=15.1'
  },
  {
    id: 3,
    alt:'Kali',
    src:'https://png.pngtree.com/png-clipart/20200226/original/pngtree-hand-drawn-lettering-let-s-traveling-quote-typography-vector-lettering-png-image_5323136.jpg'
  },


  ]
  
}


  






