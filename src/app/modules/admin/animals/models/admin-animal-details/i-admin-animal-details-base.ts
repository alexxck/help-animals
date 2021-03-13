export interface IAdminAnimalDetailsBase {
  name: string;
  breed: string;
  state: string;
  color: string;
  features: string;
  age: number;

  complexVaccination: boolean;
  rabiesVaccination: boolean;
  sterilization: boolean;
  animalHasFamily: boolean;
  responsiblePerson: string;
  showInGallery: boolean;
}
