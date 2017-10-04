import { IBindable } from '../interface/bindable';
import { ITextilable } from '../interface/textilable';

export interface IWork {
  overview?: string;
  schedule?: string;
  technicalKeywords?: string;
  featurePlan?: string;
  customers?: string;
  workingDetails?: string;
}

export class Work implements IWork, IBindable<Work>, ITextilable {
  overview?: string;
  schedule?: string;
  technicalKeywords?: string;
  featurePlan?: string;
  customers?: string;
  workingDetails?: string;

  constructor() {
  }

  bind(obj: IWork): Work {
    if (!obj) {
      throw new Error("Required arguments 'obj'.");
    }

    this.overview = obj.overview;
    this.schedule = obj.schedule;
    this.technicalKeywords = obj.technicalKeywords;
    this.featurePlan = obj.featurePlan;
    this.customers = obj.customers;
    this.workingDetails = obj.workingDetails;
    return this;
  }

  toTextile(): string {
    let textile = "";
    textile += `|*概要*|${this.overview || ""}|\n`;
    textile += `|*日程*|${this.schedule || ""}|\n`;
    textile += `|*技術キーワード*|${this.technicalKeywords || ""}|\n`;
    textile += `|*今後の予定*|${this.featurePlan || ""}|\n`;
    textile += `|*担当お客様*|${this.customers || ""}|\n`;
    textile += `|*作業内容*|${this.workingDetails || ""}|\n`;
    return textile;
  }
}
