import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routetest2 } from './routetest2';

describe('Routetest2', () => {
  let component: Routetest2;
  let fixture: ComponentFixture<Routetest2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routetest2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routetest2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
