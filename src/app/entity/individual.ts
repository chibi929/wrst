import { IBindable } from '../interface/bindable';
import { ITextilable } from '../interface/textilable';

export interface IIndividual {
  overview?: string;
  schedule?: string;
  technicalKeywords?: string;
  description?: string;
  workingDetails?: string;
}

export class Individual implements IIndividual, IBindable<Individual>, ITextilable {
  overview?: string;
  schedule?: string;
  technicalKeywords?: string;
  description?: string;
  workingDetails?: string;

  constructor() {
  }

  bind(obj: IIndividual): Individual {
    if (!obj) {
      throw new Error("Required arguments 'obj'.");
    }

    this.overview = obj.overview;
    this.schedule = obj.schedule;
    this.technicalKeywords = obj.technicalKeywords;
    this.description = obj.description;
    this.workingDetails = obj.workingDetails;
    return this;
  }

  toTextile(): string {
    let textile = "";
    textile += `|*概要*|${this.overview || ""}|\n`;
    textile += `|*日程*|${this.schedule || ""}|\n`;
    textile += `|*技術キーワード*|${this.technicalKeywords || ""}|\n`;
    textile += `|*説明*|${this.description || ""}|\n`;
    textile += `|*作業内容*|${this.workingDetails || ""}|\n`;
    return textile;
  }
}
