import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStatsNumbersComponent } from './global-stats-numbers.component';

describe('GlobalStatsNumbersComponent', () => {
  let component: GlobalStatsNumbersComponent;
  let fixture: ComponentFixture<GlobalStatsNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalStatsNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStatsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
