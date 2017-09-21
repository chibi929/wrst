import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
