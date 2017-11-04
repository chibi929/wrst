import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { WrstDateAdapter } from '../../adapter/wrst-date-adapter';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {provide: DateAdapter, useClass: WrstDateAdapter}
  ]
})
export class DateComponent implements OnInit {
  private choseDate: Date;

  constructor(dataAdapter: DateAdapter<NativeDateAdapter>) {
    dataAdapter.setLocale('ja');
  }

  ngOnInit(): void {
    this.choseDate = new Date();
  }
}
