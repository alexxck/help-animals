import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() fullScreen = true;
  @Input() show = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
