import { Component, OnInit } from '@angular/core';
import { Individual } from '../../entity/individual';
import { ITextilable } from '../../interface/textilable';

@Component({
  selector: 'individual-project',
  templateUrl: './individual-project.component.html',
  styleUrls: ['./individual-project.component.scss']
})
export class IndividualProjectComponent implements OnInit, ITextilable {
  private readonly individuals: Individual[] = [];

  constructor() {
    this.addElement();
  }

  ngOnInit() {
  }

  private addElement(): void {
    this.individuals.push(new Individual())
  }

  private onDeleteButtonClicked(i: number): void {
    if (this.individuals.length === 1) {
      return;
    }
    this.individuals.splice(i, 1);
  }

  private onAddedButtonClicked(): void {
    this.addElement();
  }

  toTextile(): string {
    return this.individuals.map(i => i.toTextile()).join("\n");
  }
}
