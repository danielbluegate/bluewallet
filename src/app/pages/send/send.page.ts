import { Component, OnInit } from '@angular/core';

declare function tokenbalance();

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  constructor() { }

  ngOnInit() {
    tokenbalance();
  }

}
