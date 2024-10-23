import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';

@Component({
  selector: 'app-birthday-form-name',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldErrorComponent],
  templateUrl: './birthday-form-name.component.html',
  styleUrl: './birthday-form-name.component.scss'
})
export class BirthdayFormNameComponent {

  @Input() birthdayForm!: FormGroup;
  @Output() onNext = new EventEmitter();
  isSubmitted:boolean = false;

  get from(){
    return this.birthdayForm.get('from');
  }

  get to(){
    return this.birthdayForm.get('to');
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.from?.valid && this.to?.valid){
      this.onNext.emit();
    }
  }

}
