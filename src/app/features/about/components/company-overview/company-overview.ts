import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-company-overview',
  imports: [RouterModule,TranslateModule],
  templateUrl: './company-overview.html',
  styleUrl: './company-overview.css'
})
export class CompanyOverview {

}
