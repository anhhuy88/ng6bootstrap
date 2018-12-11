import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalItems = 50;
  currentPage = 2;
  constructor() { }

  ngOnInit() {
  }
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
}
