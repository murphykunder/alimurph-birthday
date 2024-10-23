import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent {

  activeModal = inject(NgbActiveModal);
  @Input() cardUrl: string = '';
  copySuccess: boolean = false;
  @ViewChild('copySuccessFlashMessage') copySuccessFlashMessage!: ElementRef;

  onCopy(){
    navigator.clipboard.writeText(this.cardUrl);
    this.copySuccess = true;

    if(this.copySuccessFlashMessage){
      this.copySuccessFlashMessage.nativeElement.classList.remove('animate');
      window.requestAnimationFrame(() => {
        this.copySuccessFlashMessage.nativeElement.classList.add('animate');
      });
    }
  }
}
