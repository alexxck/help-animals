import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'help-animals';
  asideNeedShow = false;

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.updateMode();
  }

  updateMode(): void {
    this.asideNeedShow = this.elRef.nativeElement.firstElementChild.offsetWidth > 900;
  }

}
