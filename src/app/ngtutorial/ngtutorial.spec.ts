import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngtutorial } from './ngtutorial';

describe('Ngtutorial', () => {
  let component: Ngtutorial;
  let fixture: ComponentFixture<Ngtutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngtutorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngtutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
