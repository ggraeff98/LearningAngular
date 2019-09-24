import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  buttonClicked: boolean = false;
  servers: Array<string> = ['Server 1']
  @Input('nameOfElement') element: {firstName: string, lastName: string, age: number};
  @Output() buttonClickedEvent = new EventEmitter<{oldName: string}>();

  constructor() {
    this.allowNewServer = true;
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ';
    this.servers.push(this.serverName);
    this.buttonClicked = !this.buttonClicked;
    this.buttonClickedEvent.emit({
      oldName: 'Gustavo'
    })
  }

  onUpdateServerName (/* event: any */ event: Event) {
    // this.serverName = event.target.value
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
