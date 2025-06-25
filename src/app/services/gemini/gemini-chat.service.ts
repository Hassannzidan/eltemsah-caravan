import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeminiChatService {
  private apiUrl = 'http://localhost:3000/gemini/chat';

  constructor(private http: HttpClient) {}

  chatWithGemini(message: string) {
    return this.http.post<{ reply: string }>(this.apiUrl, { message });
  }
}
