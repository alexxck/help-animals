import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  phones: Array<string> = ['0631234567', '0931234567', '0472123456']

  constructor() { }

  ngOnInit(): void {
  }

}
