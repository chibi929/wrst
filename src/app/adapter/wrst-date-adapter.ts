import { NativeDateAdapter } from '@angular/material';

export class WrstDateAdapter extends NativeDateAdapter {
  private readonly DAYS = 31;

  getDateNames(): string[] {
    const dateNames: string[] = [];
    for (let i = 0; i < this.DAYS; i++) {
      dateNames[i] = String(i + 1);
    }
    return dateNames;
  }
}
