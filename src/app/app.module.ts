import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './module/app-material.module';

import { AppComponent } from './app.component';
import { WorkProjectComponent } from './component/work-project/work-project.component';
import { IndividualProjectComponent } from './component/individual-project/individual-project.component';
import { FreeSpaceComponent } from './component/free-space/free-space.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkProjectComponent,
    IndividualProjectComponent,
    FreeSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
