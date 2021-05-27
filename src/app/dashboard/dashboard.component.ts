import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  storedPosts = [];
  onPostAdded(post) {
  this.storedPosts.push(post);
  }

  constructor() { }

  ngOnInit() {
  }

}
