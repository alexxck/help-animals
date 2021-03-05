import {Component, OnDestroy} from '@angular/core';
import {environment} from '../../../../environments';
import {HttpClient} from '@angular/common/http';
import {IAnimalInfo} from '../models/ianimal-info';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {IPagination, Pagination} from '../../shared/components/pagination/pagination.component';

const ANIMALS_URL = 'animals';
const GET_ANIMALS_URL = environment.apiUrl + '/' + ANIMALS_URL;

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnDestroy {
  animalList: IAnimalInfo[] = [];
  pagination: IPagination;

  private querySubscription: Subscription;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
    this.pagination = new Pagination();
    this.pagination.url = '/' + ANIMALS_URL;

    this.querySubscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: Params) => {
        this.pagination.page = queryParam.page;
        this.getAnimals();
      }
    );
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
