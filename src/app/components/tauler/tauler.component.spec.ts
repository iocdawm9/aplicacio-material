import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulerComponent } from './tauler.component';

describe('TaulerComponent', () => {
  let component: TaulerComponent;
  let fixture: ComponentFixture<TaulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
