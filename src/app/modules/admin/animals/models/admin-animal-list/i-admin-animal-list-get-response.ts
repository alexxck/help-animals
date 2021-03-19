import {IAdminAnimalListTableElement} from './i-admin-animal-list-table-element';

export interface IAdminAnimalListGetResponse {
  animals: IAdminAnimalListTableElement[];
  page: number;
  totalPages: number;
}
