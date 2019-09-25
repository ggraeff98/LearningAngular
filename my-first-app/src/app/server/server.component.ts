import { Component } from "@angular/core";
import { LogginService } from '../loggin.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  op: string = ''

  constructor (private logginService: LogginService) {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.op = logginService.str
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor () {
    return this.serverStatus === 'online'
      ? 'green'
      : 'red';
  }
}
