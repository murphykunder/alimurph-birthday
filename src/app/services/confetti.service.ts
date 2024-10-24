import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  celebrate(){
    const duration = 8000;  // in millisec

    setTimeout(() => confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 },
        colors: ['#FF4500', '#008080', '#FFD700'],
        startVelocity: 50,
      }), 5000   // display confetti after 5sec
    );
    // clear confetti using the reset function , after certain duration
    setTimeout(() => confetti.reset(), duration);
  }
}
