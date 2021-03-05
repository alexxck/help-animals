import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../../environments';
import {HttpClient} from '@angular/common/http';
import {IAnimalInfo} from '../models/ianimal-info';
import {IPagination, Pagination} from '../../../shared/components/pagination/pagination.component';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

const ANIMALS_URL = 'animals';
const GET_ANIMALS_URL = environment.apiUrl + '/' + ANIMALS_URL;

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit, OnDestroy {
  animalList: IAnimalInfo[] = [];
  pagination: IPagination;

  private querySubscription: Subscription;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.pagination = new Pagination();
    this.pagination.url = '/' + ANIMALS_URL;

    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: Params) => {
        this.pagination.page = queryParam.page;
        this.getAnimals();
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  public getAnimals(): void {
    this.httpClient.get<IAnimalInfo[]>(GET_ANIMALS_URL).subscribe((res) => {
      this.animalList = res;
      this.pagination.totalPages = 10; // todo set params from back
    });
  }
}
