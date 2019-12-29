import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDashboardComponent } from './home-page-dashboard.component';

describe('HomePageDashboardComponent', () => {
  let component: HomePageDashboardComponent;
  let fixture: ComponentFixture<HomePageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
