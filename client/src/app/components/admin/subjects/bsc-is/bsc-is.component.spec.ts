import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BscIsComponent } from './bsc-is.component';

describe('BscIsComponent', () => {
  let component: BscIsComponent;
  let fixture: ComponentFixture<BscIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BscIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BscIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
