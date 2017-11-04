import { Component, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ITextilable } from './interface/textilable';
import { DateComponent } from './component/date/date.component';
import { WorkProjectComponent } from './component/work-project/work-project.component';
import { IndividualProjectComponent } from './component/individual-project/individual-project.component';
import { FreeSpaceComponent } from './component/free-space/free-space.component';
import { ResultDialogComponent } from './component/result-dialog/result-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DateComponent)
  private readonly dateComponent: ITextilable;

  @ViewChild(WorkProjectComponent)
  private readonly wpComponent: ITextilable;

  @ViewChild(IndividualProjectComponent)
  private readonly ipComponent: ITextilable;

  @ViewChild(FreeSpaceComponent)
  private readonly fsComponent: ITextilable;

  constructor(private dialog: MdDialog) {
  }

  private onConvertButtonClicked(): void {
    const results = [
      this.dateComponent.toTextile() + "\n",
      "h3. +業務プロジェクト+\n",
      this.wpComponent.toTextile(),
      "h3. +業務以外 (個人的な取り組み・アピールなど)+\n",
      this.ipComponent.toTextile(),
      "h3. +その他 (フリーフォーマット)+\n",
      this.fsComponent.toTextile()
    ];
    
    let dialogRef = this.dialog.open(ResultDialogComponent, {
      data: results.join("\n")
    });
  }
}
