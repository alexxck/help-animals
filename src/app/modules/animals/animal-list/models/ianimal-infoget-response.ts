export interface IAnimalInfoGetResponse {
  id: string;
  breed: string;
  age: number;
  state: string;
  color: string;
  features: string;
  image: { file: { url: string } };
}
