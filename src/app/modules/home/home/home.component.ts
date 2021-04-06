import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  phones: Array<string> = ['(063)-123-45-67', '(093)-123-45-67', '(0472)-12-34-56']
}
