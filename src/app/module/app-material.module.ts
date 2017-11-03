import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdCheckboxModule,
         MdDatepickerModule,
         MdFormFieldModule,
         MdIconModule,
         MdInputModule,
         MdNativeDateModule,
         MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdFormFieldModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdFormFieldModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdToolbarModule
  ]
})
export class AppMaterialModule { }
