import { Component} from '@angular/core';
import { AccountService } from '../account.service';
import {LoggingService} from '../logging.service'


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private loogingService:LoggingService,
          private accountService:AccountService) {
            this.accountService.statusUpdated.subscribe(
              (status:string)=>{
                alert('new status:'+status)
              }
            );
          }
  
   onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    // this.loogingService.logStatusChange(accountStatus);
  }
}
