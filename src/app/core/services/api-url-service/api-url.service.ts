import {Injectable} from '@angular/core';
import {environment} from '../../../../environments';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  public build(paths: string[]): string {
    return [environment.apiUrl].concat(paths).join('/');
  }
}
