import {Component, Input} from '@angular/core';
import {IAnimalInfo} from '../animal-list/models/ianimal-info';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  @Input() animalInfo?: IAnimalInfo;

  constructor() {
  }
}
