import {IAdminAnimalDetailsRequestResponseBaseParams} from './i-admin-animal-details-request-response-base-params';

export interface IAdminAnimalDetailsGetResponse extends IAdminAnimalDetailsRequestResponseBaseParams {
  id: string;
  image: { file: { url: string } };

  created_at: string;
  updated_at: string;
  edited_by: string;
}
