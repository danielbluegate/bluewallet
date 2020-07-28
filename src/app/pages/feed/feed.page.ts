import { Component, OnInit } from '@angular/core';

//declare function printResult();
declare function tokenbalance();

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor() { }

  ngOnInit() {
    //printResult();
    tokenbalance();
  }

}
