import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-birthday-form-audio',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './birthday-form-audio.component.html',
  styleUrl: './birthday-form-audio.component.scss'
})
export class BirthdayFormAudioComponent implements AfterViewInit{

  @Input() birthdayForm!: FormGroup;
  @Output() onNext = new EventEmitter();
  wavesurfer: WaveSurfer[] = [];
  audioList = [
    {
      name: 'Piano 1',
      url: '../../../assets/audio/1.mp3'
    },
    {
      name: 'Piano 2',
      url: '../../../assets/audio/2.mp3'
    },
    {
      name: 'Acoustic',
      url: '../../../assets/audio/3.mp3'
    },
    {
      name: 'Jazz',
      url: '../../../assets/audio/4.mp3'
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef
  ){}

  ngAfterViewInit(): void {
    // for each audio create a wavesurfer object
    Object.keys(this.audioList).forEach((key: any) => {
      this.wavesurfer.push(this.createWavesurfer('#waveform'+(key), this.audioList[key].url));
    });
    this.cdr.detectChanges(); // add this line to manually detect the changes in the html view for play pause button after wavesurfer is created
  }

  createWavesurfer(selector: string, audioUrl: string){
    return WaveSurfer.create({
      container: selector,
      waveColor: '#6276eb',
      progressColor: '#ffc0cb',
      height: 20,
      barRadius: 4,
      barWidth: 2,
      url: audioUrl,
      interact: false,
      autoplay: false,
    });
  }

  onPlayPause(key:number){
    this.wavesurfer[key]?.playPause();
  }

  onStop(key:number){
    this.wavesurfer[key]?.stop();
  }

  isPlaying(key: number){
    return this.wavesurfer[key]?.isPlaying();
  }

  onAudioChange(){
    this.wavesurfer.forEach(wavesurfer => {
      if(wavesurfer.isPlaying())
        wavesurfer.stop();
    });
  }

  isChecked(key: number){
    return (this.birthdayForm?.get('audio')?.value == key);
  }

  onSubmit(){
    this.onNext.emit();
  }
}
