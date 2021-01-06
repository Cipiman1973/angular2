import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public sidebarVisibility = true;

  public menu = {
    '/': 'Home',
    about: 'About',
    contacts: 'Contacts',
    blog: 'Blog'
  };

  public recieved(visibility: boolean): void {
    this.sidebarVisibility = visibility;
  }
}
