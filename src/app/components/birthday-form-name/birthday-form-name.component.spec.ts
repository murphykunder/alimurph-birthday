import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayFormNameComponent } from './birthday-form-name.component';

describe('BirthdayFormNameComponent', () => {
  let component: BirthdayFormNameComponent;
  let fixture: ComponentFixture<BirthdayFormNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayFormNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayFormNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
