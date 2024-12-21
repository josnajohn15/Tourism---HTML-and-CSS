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
    src:'https://th.bing.com/th/id/OIP.uPq8YTb9ffTuh0YeMoNF6QHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'

   },
   {
    id: 2,
    alt:'Zamba',
    src:'https://th.bing.com/th/id/OIP.qNYzGNbZVGf6lMDWOCqZAAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7'

   },
  {
    id: 3,
    alt:'Anoka',
    src:'https://th.bing.com/th/id/OIP.Qm24x0JszEp-Q3vHy2RcWQHaHa?rs=1&pid=ImgDetMain'
  },

  ]
  
}


  






