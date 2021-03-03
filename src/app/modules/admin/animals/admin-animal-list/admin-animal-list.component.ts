import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {IAdminAnimalInfo} from '../models/i-admin-animal-info';
import {UserAuthPermission, UserAuthService} from '../../../../core/services/user-auth-service/user-auth.service';

const API_ANIMALS_URL = environment.apiUrl + '/animals';
const ADMIN_ANIMALS_URL = '/admin/animals';


@Component({
  selector: 'app-admin-animal-list',
  templateUrl: './admin-animal-list.component.html',
  styleUrls: ['./admin-animal-list.component.css']
})
export class AdminAnimalListComponent {
  animalList: IAdminAnimalInfo[] = [];
  userAuthPermission = UserAuthPermission;

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) {
    this.getAnimals();
  }

  public getAnimals(): void {
    this.httpClient.get<IAdminAnimalInfo[]>(API_ANIMALS_URL).subscribe((res) => {
      this.animalList = res;
    });
  }

  public currentUserHasPermission(permission: UserAuthPermission): boolean {
    return this.userAuthService.hasPermission(permission);
  }

  public getRedirectToAnimalDetailsLink(id: number | string): string {
    return ADMIN_ANIMALS_URL + '/' + id;
  }

  public getRedirectToAddLink(): string {
    return ADMIN_ANIMALS_URL + '/add';
  }

}
