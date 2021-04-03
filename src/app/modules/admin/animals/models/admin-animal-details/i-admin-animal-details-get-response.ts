import {IAdminAnimalDetailsBase} from './i-admin-animal-details-base';

export interface IAdminAnimalDetailsGetResponse extends IAdminAnimalDetailsBase {
  id: string;
  image: {file: {url: string}};

  dateAdded: string;
  dateLastEdit: string;
  editedBy: string;
}
