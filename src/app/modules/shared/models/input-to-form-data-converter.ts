export class InputToFormDataConverter {

  public static convertFromEvent(htmlInputEvent: Event): FormData | null {
    const inputEl: HTMLInputElement = htmlInputEvent.target as HTMLInputElement;
    return this.convertFromInputElement(inputEl);
  }

  public static convertFromInputElement(htmlInputElement: HTMLInputElement): FormData | null {
    const fileList = htmlInputElement.files;
    if (!fileList) {
      return null;
    }

    const file = fileList.item(0);
    if (!file) {
      return null;
    }

    const formData = new FormData();
    formData.append('image', file);

    return formData;
  }
}
