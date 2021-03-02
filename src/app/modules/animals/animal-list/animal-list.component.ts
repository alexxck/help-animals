import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments';
import {HttpClient} from '@angular/common/http';
import {IAnimalInfo} from '../models/ianimal-info';

const GET_ANIMALS_URL = environment.apiUrl + '/animals';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList: IAnimalInfo[] = [];


  constructor(private httpClient: HttpClient) {
    this.getAnimals();
  }

  ngOnInit(): void {
    // this.getAnimals();
  }

  public getAnimals(): void {
    this.httpClient.get<IAnimalInfo[]>(GET_ANIMALS_URL).subscribe((res) => {
      this.animalList = res;
    });
  }

}
