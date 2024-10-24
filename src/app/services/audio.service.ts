import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audioList = [
    {
      name: 'Piano 1',
      url: '../../../assets/audio/0.mp3'
    },
    {
      name: 'Piano 2',
      url: '../../../assets/audio/1.mp3'
    },
    {
      name: 'Acoustic',
      url: '../../../assets/audio/2.mp3'
    },
    {
      name: 'Jazz',
      url: '../../../assets/audio/3.mp3'
    }
  ];

  constructor() { }

  getAllAudios(){
    return this.audioList;
  }

  getAudio(audioId: number){
    return this.audioList[audioId];
  }

  playAudio(audioId: number, delayInMillSec: number){
    const audio = new Audio();
    audio.src = this.getAudio(audioId)?.url;
    audio.load();
    //play audio after certain duration of opening the envelope
    setTimeout(() => audio.play(), delayInMillSec);
  }
}
