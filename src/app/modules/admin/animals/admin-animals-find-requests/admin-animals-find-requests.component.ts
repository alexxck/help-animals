import {Component, OnDestroy} from '@angular/core';
import {environment} from '../../../../../environments';
import {IPagination, Pagination} from '../../../shared/components/pagination/pagination.component';
import {Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';
import {IAdminAnimalFindRequest} from '../models/i-admin-animal-find-request';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';

const API_ANIMALS_FIND_REQUESTS_URL = environment.apiUrl + '/animals-find-requests/';
const ADMIN_ANIMALS_FIND_REQUESTS_URL = '/admin/animals-find-requests';


class AnimalFindRequest implements IAdminAnimalFindRequest {
  id = '';
  address = '';
  closedData = '';
  openedData = '';
  userClosedId = '';
  userCreatedId = '';
}

@Component({
  selector: 'app-admin-animals-find-requests',
  templateUrl: './admin-animals-find-requests.component.html',
  styleUrls: ['./admin-animals-find-requests.component.css']
})
export class AdminAnimalsFindRequestsComponent implements OnDestroy {

  animalRequestList: IAdminAnimalFindRequest[] = [];
  pagination: IPagination;
  newRequestAddress = '';

  QueryFilterParams = {
    opened: {filter: 'opened'},
    closed: {filter: 'closed'}
  };

  currentQueryFilterParams = this.QueryFilterParams.opened;


  private querySubscription: Subscription;

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService, private activatedRoute: ActivatedRoute) {
    this.pagination = new Pagination();
    this.pagination.url = ADMIN_ANIMALS_FIND_REQUESTS_URL;

    this.querySubscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: Params) => {
        this.pagination.page = queryParam.page;
        this.getAnimalsFindRequests(this.currentQueryFilterParams);
      }
    );
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  public getAnimalsFindRequests(params: { [param: string]: string | string[] }): void {
    const httpParams = new HttpParams();
    if (params) {
      httpParams.appendAll(params);
    }

    this.httpClient.get<IAdminAnimalFindRequest[]>(API_ANIMALS_FIND_REQUESTS_URL, {params: httpParams}).subscribe((res) => {
      this.animalRequestList = res;
      this.pagination.totalPages = 10; // todo set params from back
    });
  }

  public closeAnimalFindRequest(id: string | number): void {
    const url = API_ANIMALS_FIND_REQUESTS_URL + id;
    const userClosedId = this.userAuthService.getUser().id; // todo must do BE

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.patch(url, JSON.stringify({id, userClosedId}), {headers}).subscribe(() => {
      this.getAnimalsFindRequests(this.currentQueryFilterParams);
    }, (err) => this.submitErrorHandler(err));
  }

  public createAnimalFindRequest(): void {
    const animalFindRequest = new AnimalFindRequest();

    animalFindRequest.address = this.newRequestAddress;
    animalFindRequest.userCreatedId = this.userAuthService.getUser().id; // todo must do BE

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(API_ANIMALS_FIND_REQUESTS_URL, JSON.stringify(animalFindRequest), {headers}).subscribe(() => {
      this.getAnimalsFindRequests(this.currentQueryFilterParams);
      this.newRequestAddress = '';
    }, (err) => this.submitErrorHandler(err));
  }

  changeQueryFilterParams(params: { filter: string }): void {
    this.currentQueryFilterParams = params;
    this.getAnimalsFindRequests(this.currentQueryFilterParams);
  }


  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
