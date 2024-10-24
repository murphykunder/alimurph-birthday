import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Alignment, Bold, ClassicEditor, Essentials, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Italic, Link, Paragraph, Undo, WordCount } from 'ckeditor5';
import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';


@Component({
  selector: 'app-birthday-form-message',
  standalone: true,
  imports: [ CKEditorModule, ReactiveFormsModule, FormFieldErrorComponent],
  templateUrl: './birthday-form-message.component.html',
  styleUrl: './birthday-form-message.component.scss'
})
export class BirthdayFormMessageComponent {

  @Input() birthdayForm!: FormGroup;
  @Input() messageMaxLength!: number;
  @Input() messageCharacterCount!: number;
  @Output() updateMessageCharacterCount = new EventEmitter();
  @Output() createCard = new EventEmitter();
  public isSubmitted: boolean = false;
  public Editor = ClassicEditor;

  public config = {
      toolbar: [ 'undo', 'redo', '|', 'bold', 'italic',
        'alignment','fontBackgroundColor', 'fontColor',
        'heading', 'link'
       ],
      plugins: [
          Bold, Essentials, Italic, Paragraph, Undo,
          Alignment, FontBackgroundColor, FontColor, FontFamily,
          Heading, Link, WordCount
      ],
      wordCount: {
        onUpdate: (stats: any) => {
            this.messageCharacterCount = stats.characters;
             // required to make the form validators work which are defined in parent component BirthdayFormComponent
            this.updateMessageCharacterCount.emit(this.messageCharacterCount);
        }
      }
  }

  get message(){
    return this.birthdayForm.get('message');
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.birthdayForm.valid)
      this.createCard.emit(this.birthdayForm);
  }

}
