import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Gustavo';

  onClickButton(buttonData: {oldName: string}) {
    console.log(buttonData)
  }
}
