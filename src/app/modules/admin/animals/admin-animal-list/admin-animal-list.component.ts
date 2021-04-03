import {Component, OnDestroy} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IPagination, Pagination} from '../../../shared/components/pagination/pagination.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';
import {IAdminAnimalListTableElement} from '../models/admin-animal-list/i-admin-animal-list-table-element';
import {IAdminAnimalListGetResponse} from '../models/admin-animal-list/i-admin-animal-list-get-response';
import {ADMIN_ANIMALS_URL, API_ADMIN_ANIMALS_URL} from '../models/urls';


@Component({
  selector: 'app-admin-animal-list',
  templateUrl: './admin-animal-list.component.html',
  styleUrls: ['./admin-animal-list.component.css']
})
export class AdminAnimalListComponent implements OnDestroy {
  animalList: IAdminAnimalListTableElement[] = [];
  pagination: IPagination;

  private querySubscription: Subscription;

  constructor(
    private httpClient: HttpClient,
    public userAuthService: UserAuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.pagination = new Pagination();
    this.pagination.url = ADMIN_ANIMALS_URL;

    this.querySubscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: Params) => {
        this.pagination.page = queryParam.page || this.pagination.page;
        this.pagination.perPage = queryParam.per_page || this.pagination.perPage;
        this.getAnimals();
      }
    );
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  public getAnimals(): void {
    const httpParams = new HttpParams().appendAll(this.pagination.getQueryParams());
    this.httpClient.get<IAdminAnimalListGetResponse>(API_ADMIN_ANIMALS_URL, {params: httpParams}).subscribe((res) => {
      this.animalList = (res as unknown as IAdminAnimalListTableElement[]);   // todo remove when use back
      // this.animalList = res.animals;  // todo set params from back
      // this.pagination.page = res.page; // todo set params from back
      this.pagination.totalPages = 10; // todo set params from back
    });
  }

  public getRedirectToAnimalDetailsLink(id: number | string): string {
    return `${ADMIN_ANIMALS_URL}/${id}`;
  }

  public getRedirectToAddLink(): string {
    return `${ADMIN_ANIMALS_URL}/add`;
  }
}
