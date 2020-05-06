import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World';
  warning = null;
  limit = 5;

  changeTitle() {
    new Promise(resolve => {
      setTimeout(() => {
        resolve('Unit Testing');
      }, 5000);
    }).then((val: string) => {
      this.title = val;
    });
  }

  onReached() {
    this.warning = 'Counter reached the limit';
  }
}
