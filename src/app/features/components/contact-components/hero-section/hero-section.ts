import { CommonModule } from '@angular/common';
import { Component, HostListener,  OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements OnInit {
  scrollY = 0;
  private textArray = [
    "We love questions and feedback - and we're happy to help!",
    "Here are some ways to contact us."
  ];

  private typingElementIds = ['#first-text', '#second-text'];
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private typingSpeed = 100;

  constructor() {}

  ngOnInit(): void {
    this.startTypingEffect();
  }

  private startTypingEffect(): void {
    this.typeNextText();
  }

  private typeNextText(): void {
    const text = this.textArray[this.currentTextIndex];
    const currentId = this.typingElementIds[this.currentTextIndex];
    const previousId = this.typingElementIds[(this.currentTextIndex + 1) % 2]; // 0→1→0 loop

    const currentElement = document.querySelector<HTMLElement>(currentId);
    const previousElement = document.querySelector<HTMLElement>(previousId);

    if (!currentElement || !previousElement) return;

    // Clear only the one we're about to type into
    currentElement.innerHTML = '';
    currentElement.classList.add('typing');

    let interval = setInterval(() => {
      if (this.currentCharIndex < text.length) {
        currentElement.innerHTML += text[this.currentCharIndex];
        this.currentCharIndex++;
      } else {
        clearInterval(interval);
        this.currentCharIndex = 0;

        // Remove typing cursor once finished
        currentElement.classList.remove('typing');

        // After next message is fully typed, clear the previous one
        setTimeout(() => {
          previousElement.innerHTML = '';
          this.currentTextIndex = (this.currentTextIndex + 1) % 2;
          this.typeNextText();
        }, 1500);
      }
    }, this.typingSpeed);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }
}

// export class HeroSection {
  
//   scrollY = 0;

//   private textArray = [
//     "We love questions and feedback - and we're happy to help!",
//     "Here are some ways to contact us."
//   ];
//   private currentTextIndex = 0;
//   private currentCharIndex = 0;
//   private typingSpeed = 100;  // Speed of typing in milliseconds
//   private typingElementId = ['#first-text', '#second-text'];
  
//   public isSecondTextVisible = false;  // Controls visibility of second text

//   constructor() {}

//   ngOnInit(): void {
//     this.startTypingEffect();
//   }

//   private startTypingEffect() {
//     this.typeNextText();
//   }

  
//   private typeNextText() {
//     const text = this.textArray[this.currentTextIndex];
//     const element = document.querySelector(this.typingElementId[this.currentTextIndex]);

//     // Clear the text before starting the animation
//     if (element) {
//       element.innerHTML = '';  
//     }

//     // Reset visibility before starting to type the first text again
//     if (this.currentTextIndex === 0) {
//       this.isSecondTextVisible = false; // Hide second text when starting the first text
//     }

//     let typingInterval = setInterval(() => {
//       if (this.currentCharIndex < text.length) {
//         if (element) {
//           element.innerHTML += text[this.currentCharIndex];
//         }
//         this.currentCharIndex++;
//       } else {
//         clearInterval(typingInterval);
//         this.currentCharIndex = 0;

//         // Move to the next text after a short delay
//         if (this.currentTextIndex === 0) {
//           // Only make the second text visible after the first is finished
//           this.isSecondTextVisible = true;
//         }

//         setTimeout(() => {
//           this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
//           this.typeNextText();
//         }, 1000);  // Delay before typing next text (1 second)
//       }
//     }, this.typingSpeed);
//   }
  
//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     this.scrollY = window.scrollY;
//   }

// }

    // private typeNextText() {
    //   const text = this.textArray[this.currentTextIndex];
    //   const element = document.querySelector(this.typingElementId[this.currentTextIndex]);
  
    //   // Clear the text before starting the animation
    //   if (element) {
    //     element.innerHTML = '';  
    //   }
  
    //   let typingInterval = setInterval(() => {
    //     if (this.currentCharIndex < text.length) {
    //       // Add one character at a time to the element
    //       if (element) {
    //         element.innerHTML += text[this.currentCharIndex];
    //       }
    //       this.currentCharIndex++;
    //     } else {
    //       clearInterval(typingInterval);
    //       this.currentCharIndex = 0;
  
    //       // Move to the next text after a short delay
    //       if (this.currentTextIndex === 0) {
    //         // Only make the second text visible after the first is finished
    //         this.isSecondTextVisible = true;
    //       }
  
    //       setTimeout(() => {
    //         this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
    //         this.typeNextText();
    //       }, 1000);  // Delay before typing next text (1 second)
    //     }
    //   }, this.typingSpeed);
    // }