import {IAnimalInfoGetResponse} from './ianimal-infoget-response';
import {IAnimalInfo} from './ianimal-info';

export const convertAnimalGetResponseToAnimalList = (response: IAnimalInfoGetResponse[]): IAnimalInfo[] => {
  return response.map((resp) => {
      return {
        id: resp.id,
        breed: resp.breed,
        age: resp.age,
        state: resp.state,
        color: resp.color,
        features: resp.features,
        // imgUrl: res.image ? environment.serverHost + res.image.file.url : '', // fix when real API
        imgUrl: '/assets/images/animals/default-cat-image.jpg',
      };
    }
  );
};
