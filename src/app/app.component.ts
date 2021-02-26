import {AfterContentInit, AfterViewInit, Component, ElementRef} from '@angular/core';
import {environment} from '../environments';

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
    console.log(environment.apiUrl);
  }

  updateMode(): void {
    this.asideNeedShow = this.elRef.nativeElement.firstElementChild.offsetWidth > 900;
  }

}
