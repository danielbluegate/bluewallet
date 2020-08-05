import { Component, OnInit } from '@angular/core';

declare function feedtokenbalance();

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor() { }

  ngOnInit() {
    feedtokenbalance();
  }

}
