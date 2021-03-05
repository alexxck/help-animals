import {Observable} from 'rxjs';

export interface IFileLoader {
  readonly name: string;
  readonly fileContent: string;
  readonly size: number;
  readonly type: string;
  readonly lastModified: number;
}

export class FileLoader implements IFileLoader {
  readonly lastModified: number;
  readonly name: string;
  readonly size: number;
  readonly type: string;

  public static loadFile(file: File): Observable<IFileLoader> {
    return new Observable<IFileLoader>(subscriber => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const model = new FileLoader(file, fileReader.result as string);

        if (!fileReader.error) {
          subscriber.next(model);
        } else {
          subscriber.error(fileReader.error);
        }
        subscriber.complete();
      };
      fileReader.readAsDataURL(file);
    });
  }

  private constructor(file: File, public readonly fileContent: string) {
    this.lastModified = file.lastModified;
    this.name = file.name;
    this.size = file.size;
    this.type = file.type;
  }
}
