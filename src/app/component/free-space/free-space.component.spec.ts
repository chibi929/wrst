import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSpaceComponent } from './free-space.component';

describe('FreeSpaceComponent', () => {
  let component: FreeSpaceComponent;
  let fixture: ComponentFixture<FreeSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
