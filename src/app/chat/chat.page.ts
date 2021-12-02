import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  constructor(private iab: InAppBrowser) {}

  ngOnInit() {
   
  }

  openSystem() {
    this.iab.create('https://atendimento.ac.def.br/atendimento', '_system');
  }

}
