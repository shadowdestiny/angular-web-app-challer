import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactJoinComponent } from './contact-join.component';

describe('ContactJoinComponent', () => {
  let component: ContactJoinComponent;
  let fixture: ComponentFixture<ContactJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
