import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRankingHeaderComponent } from './top-ranking-header.component';

describe('TopRankingHeaderComponent', () => {
  let component: TopRankingHeaderComponent;
  let fixture: ComponentFixture<TopRankingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRankingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRankingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
