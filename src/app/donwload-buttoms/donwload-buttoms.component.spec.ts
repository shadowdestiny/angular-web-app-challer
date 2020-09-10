import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonwloadButtomsComponent } from './donwload-buttoms.component';

describe('DonwloadButtomsComponent', () => {
  let component: DonwloadButtomsComponent;
  let fixture: ComponentFixture<DonwloadButtomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonwloadButtomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonwloadButtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
