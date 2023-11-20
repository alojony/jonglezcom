import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wordsToType: string[] = ["Analysis", "Development", "Solutions", "Ideas"];
  currentWordIndex: number = 0;
  typedText: string = "";

  
  constructor() {}

  ngOnInit(): void {
    this.typeText();
  }

  

  typeText() {
    const speed = 100; // typing speed in milliseconds
    const delay = 1500; // delay between typing and deleting

    setInterval(() => {
      this.typeWord(this.wordsToType[this.currentWordIndex], speed);

      setTimeout(() => {
        this.deleteWord(this.wordsToType[this.currentWordIndex], speed);
        // Move to the next word
        this.currentWordIndex = (this.currentWordIndex + 1) % this.wordsToType.length;
      }, speed + delay);
    }, (speed + delay) * 2); // Adjust the interval to include typing, delay, and deleting phases
  }

  typeWord(word: string, speed: number) {
    for (let i = 0; i <= word.length; i++) {
      setTimeout(() => {
        this.typedText = word.substring(0, i);
      }, i * speed);
    }
  }

  deleteWord(word: string, speed: number) {
    for (let i = word.length; i >= 0; i--) {
      setTimeout(() => {
        this.typedText = word.substring(0, i);
      }, (word.length - i) * speed);
    }
  }
}