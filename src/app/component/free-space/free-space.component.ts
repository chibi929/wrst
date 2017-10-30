import { Component, OnInit } from '@angular/core';
import { Free  } from '../../entity/free';

@Component({
  selector: 'free-space',
  templateUrl: './free-space.component.html',
  styleUrls: ['./free-space.component.scss']
})
export class FreeSpaceComponent implements OnInit {
  private readonly frees: Free[] = [];

  constructor() {
    this.addElement();
  }

  ngOnInit() {
  }

  private addElement(): void {
    this.frees.push(new Free())
  }

  private onDeleteButtonClicked(i: number): void {
    if (this.frees.length === 1) {
      return;
    }
    this.frees.splice(i, 1);
  }

  private onAddedButtonClicked(): void {
    this.addElement();
  }
}
