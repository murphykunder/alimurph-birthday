import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BirthdayFormNameComponent } from '../../components/birthday-form-name/birthday-form-name.component';
import { BirthdayFormAudioComponent } from '../../components/birthday-form-audio/birthday-form-audio.component';
import { BirthdayFormMessageComponent } from '../../components/birthday-form-message/birthday-form-message.component';
import { ckEditorMinLength, ckEditorMaxLength } from '../../validators/ckeditor.validator';
import { EncryptionService } from '../../services/encryption.service';
import { ModalContentComponent } from '../../components/modal-content/modal-content.component';


@Component({
  selector: 'app-birthday-form',
  standalone: true,
  imports: [NgbNavModule, BirthdayFormNameComponent, BirthdayFormAudioComponent, BirthdayFormMessageComponent],
  templateUrl: './birthday-form.component.html',
  styleUrl: './birthday-form.component.scss',
  encapsulation: ViewEncapsulation.None  //share the css to all child components rendered in the page
})
export class BirthdayFormComponent implements OnInit{

  public active: number = 1;
  public birthdayForm!: FormGroup;
  public messageCharacterCount: number = 0;
  public messageMinLength: number = 8;
  public messageMaxLength: number = 1000;
  public modalService = inject(NgbModal);

  constructor(
    private formBuilder: FormBuilder,
    private encryptionService: EncryptionService
  ){}

  ngOnInit(): void {
    this.birthdayForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.minLength(2)]],
      to: ['', [Validators.required, Validators.minLength(2)]],
      audio: ['0'],
      message: ['', [
        Validators.required,
        ckEditorMaxLength(() => this.messageCharacterCount, this.messageMaxLength),
        ckEditorMinLength(() => this.messageCharacterCount, this.messageMinLength)
      ]]
    })
  }

  onNext(){
    this.active += 1;
  }

  updateMessageCharacterCount(messageCount: number){
    this.messageCharacterCount = messageCount;
  }

  createCard(){
    if(this.birthdayForm.valid){
      const encryptedData = this.encryptionService.encryptData(this.birthdayForm.value);
      if(encryptedData){
        const cardUrl = window.location.protocol + "//" + window.location.host + "/" + encryptedData;
        const modalRef = this.modalService.open(ModalContentComponent, { centered: true });
        modalRef.componentInstance.cardUrl = cardUrl;
      }
    }
  }

}
