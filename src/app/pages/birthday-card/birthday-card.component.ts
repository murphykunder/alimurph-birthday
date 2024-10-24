import { Component, ViewEncapsulation } from '@angular/core';
import { BirthdayCakeComponent } from '../../components/birthday-cake/birthday-cake.component';
import { BirthdayLetterComponent } from '../../components/birthday-letter/birthday-letter.component';
import { ActivatedRoute } from '@angular/router';
import { BirthdayRequestResponse } from '../../model/birthday-request-response.model';
import { EncryptionService } from '../../services/encryption.service';
import { ConfettiService } from '../../services/confetti.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-birthday-card',
  standalone: true,
  imports: [BirthdayLetterComponent, BirthdayCakeComponent, NgbTooltip],
  templateUrl: './birthday-card.component.html',
  styleUrl: './birthday-card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BirthdayCardComponent {

  envelopeOpen: boolean = false;
  public birthdayData: BirthdayRequestResponse | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private encryptionService: EncryptionService,
    private confettiService: ConfettiService,
    private audioService: AudioService
  ){}

  ngOnInit(): void {
      const cardId = this.activatedRoute.snapshot.params['cardId'];
      this.birthdayData = this.encryptionService.decryptData(cardId);
  }

  get senderName(){
    return this.birthdayData?.from;
  }

  get birthdayPersonName(){
    return this.birthdayData?.to;
  }

  get birthdayMessage(){
    return this.birthdayData?.message;
  }

  openEnvelope(){
    this.envelopeOpen = true;
    if(this.birthdayData && this.birthdayData.audio){
      this.audioService.playAudio(this.birthdayData.audio, 3000);
      this.confettiService.celebrate();
    }
  }

}
