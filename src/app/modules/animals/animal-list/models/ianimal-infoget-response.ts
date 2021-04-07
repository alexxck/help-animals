export interface IAnimalInfoGetResponse {
  id: string;
  breed: string;
  age: number;
  sex: string;
  color: string;
  features: string;
  image: { file: { url: string } };
}
