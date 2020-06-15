import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOpen: boolean = false;

  constructor() { }

  onOpen() {
    this.isOpen = !this.isOpen;
  }
  
}
