import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DVB Departures';
  IsDarkTheme = true;
  themeClass = 'dark';

  switchTheme(): void {
    console.log(this.IsDarkTheme ? 'dark' : 'light');
    this.IsDarkTheme = !this.IsDarkTheme;
    this.IsDarkTheme ? this.themeClass = 'dark' : this.themeClass = 'light';
  }
}
