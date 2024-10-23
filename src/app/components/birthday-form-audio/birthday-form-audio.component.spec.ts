import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayFormAudioComponent } from './birthday-form-audio.component';

describe('BirthdayFormAudioComponent', () => {
  let component: BirthdayFormAudioComponent;
  let fixture: ComponentFixture<BirthdayFormAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayFormAudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayFormAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
