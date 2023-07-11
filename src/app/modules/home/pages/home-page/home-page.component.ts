import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent  {
  imageUrl: string;

  constructor() {
    this.imageUrl = './assets/img/img-rick-and-morty-middle-finger.webp';
  }

}
