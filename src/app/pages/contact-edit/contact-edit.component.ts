import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact: Contact

  constructor(private contactService: ContactService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(async params => {
      this.contact = params['id']?  await this.contactService.getContactById(params['id']).toPromise() : this.contactService.getEmptyContact() as Contact
    })
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact).toPromise()
    this.router.navigateByUrl('contact')

  }

}
