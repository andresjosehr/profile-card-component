import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-card';

  constructor(private titleService: Title){
    this.titleService.setTitle("Profile card component | José Andrés Hernández");
  }

}
