import {IAdminAnimalDetailsPostPatchRequest} from '../../models/admin-animal-details/i-admin-animal-details-post-patch-request';

export class AnimalDetailsConverters {
  public static convertAnimalPostPatchRequestToFormData(request: IAdminAnimalDetailsPostPatchRequest): FormData {
    const reqFormData = new FormData();

    // reqFormData.set('name', request.name);
    // reqFormData.set('age', '10');
    // reqFormData.set('animal_has_family', request.animalHasFamily.toString());
    // reqFormData.set('sterilization', request.sterilization.toString());
    // reqFormData.set('show_in_gallery', request.showInGallery.toString());
    // reqFormData.set('sex', request.sex);
    // reqFormData.set('responsible_person', request.responsiblePerson);
    // reqFormData.set('rabies_vaccination', request.rabiesVaccination.toString());
    // reqFormData.set('features', request.features);
    // reqFormData.set('complex_vaccination', request.complexVaccination.toString());
    // reqFormData.set('color', request.color);
    // reqFormData.set('breed', request.breed);


    Object.entries(request).forEach(([k, v]) => {
      if (v === null || v === undefined) {
        return;
      }

      const key = camelToSnakeCaseConvertor(k);

      if (typeof v.name === 'string' || typeof v === 'string') {
        reqFormData.set(key, v);
      } else {
        reqFormData.set(key, v.toString());
      }
    });

    return reqFormData;
  }
}

const camelToSnakeCaseConvertor = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
