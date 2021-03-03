import {Component, OnInit} from '@angular/core';
import {IAdminAnimalInfo} from '../models/i-admin-animal-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments';
import {ActivatedRoute} from '@angular/router';
import {UserAuthPermission, UserAuthService} from '../../../../core/services/user-auth-service/user-auth.service';

const API_ANIMAL_BASE_URL = environment.apiUrl + '/animals/';

enum OperationType {
  ADD,
  EDIT,
  NONE
}

class AdminAnimalInfo implements IAdminAnimalInfo {
  age = '';
  animalHasFamily = false;
  breed = '';
  color = '';
  complexVaccination = false;
  dateAdded = '';
  dateLastEdit = '';
  features = '';
  id = '';
  imgUrl = '';
  rabiesVaccination = false;
  responsiblePerson = '';
  state = '';
  sterilization = false;
}

@Component({
  selector: 'app-admin-animal-details',
  templateUrl: './admin-animal-details.component.html',
  styleUrls: ['./admin-animal-details.component.css']
})
export class AdminAnimalDetailsComponent implements OnInit {
  animal: IAdminAnimalInfo = new AdminAnimalInfo();
  addPermission = this.userAuthService.hasPermission(UserAuthPermission.CAN_ADD_AND_REMOVE_ANIMALS);
  editPermission = this.userAuthService.hasPermission(UserAuthPermission.CAN_EDIT_ANIMALS);
  operationType = OperationType.NONE;

  constructor(private httpClient: HttpClient,
              private activatedRouter: ActivatedRoute,
              private userAuthService: UserAuthService) {
    this.getAnimal(activatedRouter.snapshot.params.id);
    this.setFormRequestType(activatedRouter.snapshot.params.id);

  }

  ngOnInit(): void {
  }

  public getAnimal(id?: number | string): void {
    if (!id) {
      return;
    }

    this.httpClient.get<IAdminAnimalInfo>(API_ANIMAL_BASE_URL + id).subscribe((res) => {
      this.animal = res;
    });
  }

  setFormRequestType(id?: string): void {
    if (!id && this.addPermission) {
      this.operationType = OperationType.ADD;
    } else if (id && this.editPermission) {
      this.operationType = OperationType.EDIT;
    }
  }

  formReadonlyFieldCheck(): boolean {
    return !this.addPermission && !this.editPermission;
  }

  submit(): void {
    if (this.operationType === OperationType.EDIT) {
      const url = API_ANIMAL_BASE_URL + this.animal.id;
      const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
      this.httpClient.patch(url, JSON.stringify(this.animal), {headers}).subscribe((res) => {
        this.getAnimal(this.animal.id);
      });
    } else if (this.operationType === OperationType.ADD) {
      const url = API_ANIMAL_BASE_URL + this.animal.id;
      const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
      // todo
      // this.httpClient.patch(url, JSON.stringify(this.animal), {headers}).subscribe((res) => {
      //   this.getAnimal(this.animal.id);
      // });
    }
  }
}
