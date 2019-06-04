import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BscCsComponent } from './bsc-cs.component';

describe('BscCsComponent', () => {
  let component: BscCsComponent;
  let fixture: ComponentFixture<BscCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BscCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BscCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
