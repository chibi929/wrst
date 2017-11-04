import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { WrstDateAdapter } from '../../adapter/wrst-date-adapter';
import { ITextilable } from '../../interface/textilable';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {provide: DateAdapter, useClass: WrstDateAdapter}
  ]
})
export class DateComponent implements OnInit, ITextilable {
  private choseDate: Date;

  constructor(dataAdapter: DateAdapter<NativeDateAdapter>) {
    dataAdapter.setLocale('ja');
  }

  ngOnInit(): void {
    this.choseDate = new Date();
  }

  toTextile(): string {
    return "Date\n";
  }
}
