import { IBindable } from '../interface/bindable';
import { ITextilable } from '../interface/textilable';

export interface IFree {
  freeWords?: string;
}

export class Free implements IFree, IBindable<Free>, ITextilable {
  freeWords?: string;

  constructor() {
  }

  bind(obj: IFree): Free {
    if (!obj) {
      throw new Error("Required arguments 'obj'.");
    }

    this.freeWords = obj.freeWords;
    return this;
  }

  toTextile(): string {
    let textile = "";
    textile += `|${this.freeWords}|\n`;
    return textile;
  }
}
