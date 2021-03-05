import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {IAdminAnimalInfo} from '../models/i-admin-animal-info';
import {IPagination, Pagination} from '../../../shared/components/pagination/pagination.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth-service/user-auth.service';

const API_ANIMALS_URL = environment.apiUrl + '/animals';
const ADMIN_ANIMALS_URL = '/admin/animals';


@Component({
  selector: 'app-admin-animal-list',
  templateUrl: './admin-animal-list.component.html',
  styleUrls: ['./admin-animal-list.component.css']
})
export class AdminAnimalListComponent implements OnDestroy {
  animalList: IAdminAnimalInfo[] = [];
  pagination: IPagination;

  private querySubscription: Subscription;

  constructor(private httpClient: HttpClient, public userAuthService: UserAuthService, private activatedRoute: ActivatedRoute) {
    this.pagination = new Pagination();
    this.pagination.url = ADMIN_ANIMALS_URL;

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
    this.httpClient.get<IAdminAnimalInfo[]>(API_ANIMALS_URL).subscribe((res) => {
      this.animalList = res;
      this.pagination.totalPages = 10; // todo set params from back
    });
  }

  public getRedirectToAnimalDetailsLink(id: number | string): string {
    return ADMIN_ANIMALS_URL + '/' + id;
  }

  public getRedirectToAddLink(): string {
    return ADMIN_ANIMALS_URL + '/add';
  }

}
