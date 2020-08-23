import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactModel} from "../../models/contact.model";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
  }

  message;
  status;

  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    support: ['', Validators.required],
    comment: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  sendData() {
    const contact: ContactModel = {
      fullName: this.contactForm.value.firstName,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.support,
      description: this.contactForm.value.comment,
    }
    this.contactService.setContact(contact).subscribe((data: any) =>{
      this.status = 'ok';
    }, error => {
      this.status = 'error';
      this.message = error.message;
    });
  }

  submit() {
    this.sendData();
  }

}
