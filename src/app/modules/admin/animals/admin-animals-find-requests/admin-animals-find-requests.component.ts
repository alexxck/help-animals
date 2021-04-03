import {Component, OnDestroy} from '@angular/core';
import {environment} from '../../../../../environments';
import {IPagination, Pagination} from '../../../shared/components/pagination/pagination.component';
import {Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IAdminAnimalFindRequest} from './models/i-admin-animal-find-request';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';

const API_ANIMALS_FIND_REQUESTS_URL = environment.fakeApiUrl + '/animals-find-requests/';
const ADMIN_ANIMALS_FIND_REQUESTS_URL = '/admin/animals/find-requests';

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

  QueryFilterParamTypes = {
    opened: {filter: 'opened'},
    closed: {filter: 'closed'}
  };

  currentQueryFilterParams = this.QueryFilterParamTypes.opened;

  private querySubscription: Subscription;

  constructor(private httpClient: HttpClient,
              private userAuthService: UserAuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.pagination = new Pagination();
    this.pagination.additionalParams = this.QueryFilterParamTypes.opened;
    this.pagination.url = ADMIN_ANIMALS_FIND_REQUESTS_URL;

    this.querySubscription = this.activatedRoute.queryParams.subscribe(
      (queryParam: Params) => {
        this.pagination.page = queryParam.page || this.pagination.page;
        this.pagination.perPage = queryParam.per_page || this.pagination.perPage;
        this.getAnimalsFindRequests();
      }
    );
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  public getAnimalsFindRequests(): void {
    const httpParams = new HttpParams();
    httpParams.append('filter', this.currentQueryFilterParams.filter);
    httpParams.append('page', this.pagination.page.toString());
    httpParams.append('per_page', this.pagination.perPage.toString());

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
      this.router.navigate([ADMIN_ANIMALS_FIND_REQUESTS_URL], {
        queryParams: this.currentQueryFilterParams
      });
    }, (err) => this.submitErrorHandler(err));
  }

  public createAnimalFindRequest(): void {
    const animalFindRequest = new AnimalFindRequest();

    animalFindRequest.address = this.newRequestAddress;
    animalFindRequest.userCreatedId = this.userAuthService.getUser().id; // todo must do BE

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(API_ANIMALS_FIND_REQUESTS_URL, JSON.stringify(animalFindRequest), {headers}).subscribe(() => {
      this.router.navigate([ADMIN_ANIMALS_FIND_REQUESTS_URL], {
        queryParams: this.currentQueryFilterParams
      });
      this.newRequestAddress = '';
    }, (err) => this.submitErrorHandler(err));
  }

  changeQueryFilterParams(params: { filter: string }): void {
    this.currentQueryFilterParams = params;
    this.pagination.additionalParams = params;
    this.router.navigate([ADMIN_ANIMALS_FIND_REQUESTS_URL], {
      queryParams: this.currentQueryFilterParams
    });
  }


  submitErrorHandler(err: Error): void {
    alert('Сталася помилка при відправці форми: ' + err.message);
  }
}
