import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserProfitService } from 'src/app/Services/user-profit.service';
import { Observable } from 'rxjs';
import { Profit  } from 'src/app/Models/profit';
@Component({
  selector: 'app-user-profit',
  templateUrl: './user-profit.component.html',
  styleUrls: ['./user-profit.component.css']
})

export class UserProfitComponent {
guid: string | undefined;
profit: Observable<Profit> | undefined;
constructor (private auth: AuthService, private profirService: UserProfitService){}

ngOnInit() {
  this.guid = this.auth.getGuidFromToken();
  if ( this.guid !== undefined)
  {
    this.profit = this.profirService.getProfit(this.guid)
  } 
}

} 