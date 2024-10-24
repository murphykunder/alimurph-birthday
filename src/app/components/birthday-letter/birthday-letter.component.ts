import { Component, inject, Input } from '@angular/core';
import { BirthdayCakeComponent } from '../birthday-cake/birthday-cake.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-birthday-letter',
  standalone: true,
  imports: [BirthdayCakeComponent, CommonModule],
  templateUrl: './birthday-letter.component.html',
  styleUrl: './birthday-letter.component.scss'
})
export class BirthdayLetterComponent {

  @Input() isEnvelopeOpen: boolean = false;
  @Input() birthdayPersonName: string | undefined;
  @Input() birthdayMessage!: string | undefined;
  public sanitizer = inject(DomSanitizer);

}
