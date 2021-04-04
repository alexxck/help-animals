import {IAdminAnimalListGetResponseElement} from './i-admin-animal-list-get-response';
import {IAdminAnimalListTableElement} from './i-admin-animal-list-table-element';

export const convertResponseToAnimalList = (response: IAdminAnimalListGetResponseElement[]): IAdminAnimalListTableElement[] => {
  return response.map((resp) => {
      return {
        id: resp.id,
        complexVaccination: resp.complexVaccination,
        rabiesVaccination: resp.rabiesVaccination,
        sterilization: resp.sterilization,
        animalHasFamily: resp.animalHasFamily,
        responsiblePerson: resp.responsiblePerson
      };
    }
  );
};
