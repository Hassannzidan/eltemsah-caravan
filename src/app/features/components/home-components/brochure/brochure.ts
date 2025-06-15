import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brochure',
  imports: [CommonModule,TranslateModule],
  templateUrl: './brochure.html',
  styleUrl: './brochure.css'
})
export class Brochure {

}
