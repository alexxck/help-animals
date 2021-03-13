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
      const fr = new FileReader();
      fr.onload = () => {
        const model = new FileReaderAsArrayBuffer(file, fr.result as ArrayBuffer);

        if (!fr.error) {
          subscriber.next(model);
        } else {
          subscriber.error(fr.error);
        }
        subscriber.complete();
      };
      fr.readAsArrayBuffer(file);
    });
  }

  private constructor(file: File, public readonly fileContent: ArrayBuffer) {
    this.lastModified = file.lastModified;
    this.name = file.name;
    this.size = file.size;
    this.type = file.type;
  }
}
