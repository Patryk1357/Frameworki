import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWashClientComponent } from './car-wash-client.component';

describe('CarWashClientComponent', () => {
  let component: CarWashClientComponent;
  let fixture: ComponentFixture<CarWashClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarWashClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWashClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
