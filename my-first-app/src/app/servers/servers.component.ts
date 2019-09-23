import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!'
  serverName: string = ''

  constructor() {
    setTimeout (() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServerName (/* event: any */ event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    // this.serverName = event.target.value
  }

}
