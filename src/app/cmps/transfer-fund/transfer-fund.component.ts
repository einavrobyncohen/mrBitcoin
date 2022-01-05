import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  amount: number =0
  subscription: Subscription
  @Input() contact: Contact
  @Input() user: User
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onTransferCoins() {
    this.userService.addMove(this.contact, this.amount)
  }

}
