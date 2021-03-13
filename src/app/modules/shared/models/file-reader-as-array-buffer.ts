import {Observable} from 'rxjs';

export interface IFileReaderAsArrayBuffer {
  readonly name: string;
  readonly fileContent: ArrayBuffer;
  readonly size: number;
  readonly type: string;
  readonly lastModified: number;
}

export class FileReaderAsArrayBuffer implements IFileReaderAsArrayBuffer {
  readonly lastModified: number;
  readonly name: string;
  readonly size: number;
  readonly type: string;

  public static readAsArrayBuffer(file: File): Observable<IFileReaderAsArrayBuffer> {
    return new Observable<IFileReaderAsArrayBuffer>(subscriber => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const model = new FileReaderAsArrayBuffer(file, fileReader.result as ArrayBuffer);

        if (!fileReader.error) {
          subscriber.next(model);
        } else {
          subscriber.error(fileReader.error);
        }
        subscriber.complete();
      };
      fileReader.readAsArrayBuffer(file);
    });
  }

  private constructor(file: File, public readonly fileContent: ArrayBuffer) {
    this.lastModified = file.lastModified;
    this.name = file.name;
    this.size = file.size;
    this.type = file.type;
  }
}
