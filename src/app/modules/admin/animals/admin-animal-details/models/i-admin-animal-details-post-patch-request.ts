import {IAdminAnimalDetailsRequestResponseBaseParams} from './i-admin-animal-details-request-response-base-params';

export interface IAdminAnimalDetailsPostPatchRequest extends IAdminAnimalDetailsRequestResponseBaseParams {
  'image_attributes[file]': File | null;
}
