import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routetest } from './routetest';

describe('Routetest', () => {
  let component: Routetest;
  let fixture: ComponentFixture<Routetest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routetest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routetest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
