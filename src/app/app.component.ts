import {AfterContentInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'help-animals';
  asideNeedShow = false;

  constructor(private elRef: ElementRef) {
  }

  ngAfterContentInit(): void {
    this.updateMode();
  }

  updateMode(): void { // todo remove if dont use
    this.asideNeedShow = this.elRef.nativeElement.firstElementChild.offsetWidth > 900;
  }

}
