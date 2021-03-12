import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

/**
 * fullScreen: show loader at static position center of screen
 * show: display/hide loader
 */
export class LoaderComponent {
  @Input() fullScreen = false;
  @Input() show = false;
}
