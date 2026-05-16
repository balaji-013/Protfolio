import { Component, Input, OnInit } from '@angular/core';
import { antigravityAnimation } from '../../../animations/antigravity.animation';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  animations: [antigravityAnimation]
})
export class HeroComponent implements OnInit {
  @Input() role = '';
  @Input() summary = '';

  displayText = '';
  private words = ['Future', 'Scalable Systems', 'Modern Web'];
  private currentWordIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;

  ngOnInit(): void {
    this.type();
  }

  type(): void {
    const currentWord = this.words[this.currentWordIndex];
    
    if (this.isDeleting) {
      this.displayText = currentWord.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = currentWord.substring(0, this.displayText.length + 1);
    }

    let delta = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (!this.isDeleting && this.displayText === currentWord) {
      delta = 2000; // Pause at end of word
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      delta = 500;
    }

    setTimeout(() => this.type(), delta);
  }

  scrollTo(sectionId: string): void {
    const element = document.querySelector('#' + sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
