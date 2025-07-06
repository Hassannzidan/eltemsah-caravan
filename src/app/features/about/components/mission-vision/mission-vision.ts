import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { lucideStar } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mission-vision',
  imports: [CommonModule,NgIconsModule,TranslateModule],
  templateUrl: './mission-vision.html',
  styleUrl: './mission-vision.css',
  viewProviders:[provideIcons({
    lucideStar
  })]
})
export class MissionVision {

}
