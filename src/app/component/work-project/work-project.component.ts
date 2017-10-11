import { Component, OnInit } from '@angular/core';
import { Work } from '../../entity/work';

@Component({
  selector: 'work-project',
  templateUrl: './work-project.component.html',
  styleUrls: ['./work-project.component.scss']
})
export class WorkProjectComponent implements OnInit {
  private readonly works: Work[] = [];

  constructor() {
    this.addWorkElement();
  }

  ngOnInit(): void {
  }

  private addWorkElement(): void {
    this.works.push(new Work())
  }

  private onDeleteButtonClicked(i: number): void {
    if (this.works.length === 1) {
      return;
    }
    this.works.splice(i, 1);
  }

  private onAddedButtonClicked(): void {
    this.addWorkElement();
  }
}
