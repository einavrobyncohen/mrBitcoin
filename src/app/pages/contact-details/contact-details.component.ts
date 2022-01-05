import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  contact: Contact
  subscription: Subscription
  userSubscription: Subscription
  user: User

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  async ngOnInit(): Promise<any> {


    this.subscription = this.route.data.subscribe(data=> {
      this.contact = data['contact']
    })
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user)
    // this.subscription = this.route.params.subscribe(async params => {
    //   const contact =await  this.contactService.getContactById(params['id']).toPromise()
    //   this.contact = contact
      
      
    }
  

  onBack() {
    this.router.navigateByUrl('contact')
  }


  ngOnDestroy() : void{
    this.subscription.unsubscribe()

  }


}
