export interface IAdminAnimalDetailsRequestResponseBaseParams {
  name: string;
  breed: string;
  sex: string;
  color: string;
  features: string;
  age: number;

  complex_vaccination: boolean;
  rabies_vaccination: boolean;
  sterilization: boolean;
  animal_has_family: boolean;
  responsible_person: string;
  show_in_gallery: boolean;
}
