import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayLetterComponent } from './birthday-letter.component';

describe('BirthdayLetterComponent', () => {
  let component: BirthdayLetterComponent;
  let fixture: ComponentFixture<BirthdayLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
