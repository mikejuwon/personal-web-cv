import { Component, OnInit } from '@angular/core';
// material icons
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [MatIconModule],
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
