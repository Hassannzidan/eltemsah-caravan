import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../../services/language/language.service';
import gsap from 'gsap';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit {
  scrollY = 0;
  currentLang: 'en' | 'ar' = 'en';
  private translate = inject(TranslateService);
  private langService = inject(LanguageService);

  // private textArray = [
  //   "We love questions and feedback – don’t hesitate to reach out. We're here to help!",
  // ];

  // private typingElementIds = ['#first-text'];
  // private currentTextIndex = 0;
  // private currentCharIndex = 0;
  // private typingSpeed = 100;
  // private typingInterval: any;

  ngOnInit(): void {
    this.currentLang = this.langService.getCurrentLanguage();

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang as 'en' | 'ar';
      this.animateTyping();
    });
  }

  ngAfterViewInit(): void {
    this.animateTyping();
  }

  private animateTyping(): void {
    this.translate.get('contactCards.typing_text').subscribe((text: string) => {
      const target = document.getElementById('typing-text');
      if (!target) return;

      gsap.killTweensOf(target);
      target.innerText = '';

      const chars = text.split('');
      const typingSpeed = this.currentLang === 'ar' ? 0.1 : 0.06;

      const tl = gsap.timeline();

      chars.forEach((_, index) => {
        tl.to(
          {},
          {
            duration: typingSpeed,
            onUpdate: () => {
              target!.innerText = text.substring(0, index + 1);
            },
          }
        );
      });

      // تكرار بعد 2 ثانية
      tl.to(
        {},
        {
          duration: 2,
          onComplete: () => {
            target!.innerText = '';
            this.animateTyping();
          },
        }
      );
    });
  }

  // private loadTypingText(): void {
  //   this.translate
  //     .get('contactCards.typing_text')
  //     .subscribe((translatedText: string) => {
  //       this.textArray = [translatedText];
  //       this.startTypingEffect();
  //     });
  // }

  // private startTypingEffect(): void {
  //   this.typeNextText();
  // }

  // private typeNextText(): void {
  //   const text = this.textArray[this.currentTextIndex];
  //   const currentId = this.typingElementIds[0];
  //   const currentElement = document.querySelector<HTMLElement>(currentId);

  //   if (!currentElement) return;

  //   currentElement.innerHTML = '';
  //   currentElement.classList.add('typing');

  //   let interval = setInterval(() => {
  //     if (this.currentCharIndex < text.length) {
  //       currentElement.innerHTML += text[this.currentCharIndex];
  //       this.currentCharIndex++;
  //     } else {
  //       clearInterval(interval);
  //       this.currentCharIndex = 0;
  //       currentElement.classList.remove('typing');

  //       // بدل ما تمسح عنصرين، امسح واحد فقط
  //       setTimeout(() => {
  //         currentElement.innerHTML = '';
  //         this.typeNextText();
  //       }, 1500);
  //     }
  //   }, this.typingSpeed);
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }
}
