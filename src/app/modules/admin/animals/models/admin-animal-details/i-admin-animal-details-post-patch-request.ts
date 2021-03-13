import {IAdminAnimalDetailsBase} from './i-admin-animal-details-base';

export interface IAdminAnimalDetailsPostPatchRequest extends IAdminAnimalDetailsBase {
  imgFileContent: string;
}
