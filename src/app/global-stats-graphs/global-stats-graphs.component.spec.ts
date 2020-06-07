import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStatsGraphsComponent } from './global-stats-graphs.component';

describe('GlobalStatsGraphsComponent', () => {
  let component: GlobalStatsGraphsComponent;
  let fixture: ComponentFixture<GlobalStatsGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalStatsGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStatsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
