import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  standalone: true, 
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
  export class CardComponent {
    @Input() data:any;   // Input for image source
  }
