import { CommonModule } from '@angular/common';
import { Component, effect, signal, ViewChild, type ElementRef } from '@angular/core';
import { GeminiChatService } from '../../../services/gemini/gemini-chat.service';

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule],
  templateUrl: './chat-bot.html',
  styleUrl: './chat-bot.css'
})
export class ChatBot {
  isOpen = signal(false);
  hasShownNotification = signal(false);
  inputValue = signal('');
  showQuestions = signal(true);
  messages = signal<Message[]>([]);

  @ViewChild('messagesEndRef') messagesEndRef!: ElementRef<HTMLDivElement>;

  presetQuestions = [
    {
      icon: '🚚',
      text: 'What types of vehicles do you manufacture?',
      response: 'We specialize in manufacturing high-quality caravans, RVs...'
    },
    {
      icon: '⚙️',
      text: 'Can you customize vehicles to my needs?',
      response: 'Absolutely! We offer extensive customization options...'
    },
    {
      icon: '📦',
      text: "What's your manufacturing process like?",
      response: 'Our manufacturing process combines traditional craftsmanship...'
    }
  ];

  botResponses = {
    greeting: "Hey there! I'm Carvy, your friendly caravan manufacturing assistant! 🚐✨",
    default: "That's a great question! Would you like to know more about customization?",
    thanks: "You're very welcome! 🌟🚐"
  };

  constructor(private geminiService: GeminiChatService) {
    const hasShown = localStorage.getItem('chatbotNotificationShown');
    if (!hasShown) {
      setTimeout(() => {
        this.hasShownNotification.set(true);
        localStorage.setItem('chatbotNotificationShown', 'true');
      }, 3000);
    }

    effect(() => {
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      // this.messagesEndRef?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
      this.messagesEndRef!.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }, 0);
  }
  onInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  this.inputValue.set(input.value);
}


  addBotMessage(text: string) {
    this.messages.update(msgs => [...msgs, this.createMessage(text, true)]);
  }

  addUserMessage(text: string) {
    this.messages.update(msgs => [...msgs, this.createMessage(text, false)]);
  }

  createMessage(text: string, isBot: boolean): Message {
    return {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
  }

  openChat() {
    this.isOpen.set(true);
    this.hasShownNotification.set(false);
    if (this.messages().length === 0) {
      this.addBotMessage(this.botResponses.greeting);
    }
  }

  handleQuestionClick(question: typeof this.presetQuestions[0]) {
    this.addUserMessage(question.text);
    this.showQuestions.set(false);
    setTimeout(() => {
      this.addBotMessage(question.response);
    }, 1000);
  }

  // handleSendMessage() {
  //   const value = this.inputValue().trim();
  //   if (!value) return;

  //   this.addUserMessage(value);
  //   this.showQuestions.set(false);

  //   setTimeout(() => {
  //     const lower = value.toLowerCase();
  //     if (lower.includes('thank')) {
  //       this.addBotMessage(this.botResponses.thanks);
  //     } else if (lower.includes('hello') || lower.includes('hi')) {
  //       this.addBotMessage("Hello there! How can I help you? 😊");
  //     } else {
  //       this.addBotMessage(this.botResponses.default);
  //     }
  //   }, 1000);

  //   this.inputValue.set('');
  // }

  handleSendMessage() {
  const value = this.inputValue().trim();
  if (!value) return;

  this.addUserMessage(value);
  this.inputValue.set('');
  this.showQuestions.set(false);

  this.geminiService.chatWithGemini(value).subscribe({
    next: (res) => this.addBotMessage(res.reply),
    error: () => this.addBotMessage("Sorry, I couldn't process that 😕")
  });
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleSendMessage();
    }
  }

  closeChat() {
    this.isOpen.set(false);
  }
}

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}
