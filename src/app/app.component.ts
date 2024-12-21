import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ExploreComponent } from "./explore/explore.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,ExploreComponent, HomeComponent, ContactComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project_work';
}
