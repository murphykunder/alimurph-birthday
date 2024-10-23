import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayFormMessageComponent } from './birthday-form-message.component';

describe('BirthdayFormMessageComponent', () => {
  let component: BirthdayFormMessageComponent;
  let fixture: ComponentFixture<BirthdayFormMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayFormMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayFormMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
