import {Component, Input, OnInit} from '@angular/core';

export interface IAnimalCard {
  id: string;
  breed: string;
  state: string;
  color: string;
  features: string;
  imgUrl: string;
}

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent{

  @Input() animalInfo?: IAnimalCard;

  constructor() {
  }
}
