import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ContactService} from '../../service/contact.service';
import {ContactJoinModel} from '../../models/contact.join.model';

@Component({
  selector: 'app-contact-join',
  templateUrl: './contact-join.component.html',
  styleUrls: ['./contact-join.component.scss']
})
export class ContactJoinComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
  }

  message;
  status;
  isLoading = false;
  isShowError = false;

  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required],
    profile: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  sendData() {
    const contact: ContactJoinModel = {
      fullName: this.contactForm.value.firstName,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.profile,
      description: this.contactForm.value.comment,
      profile: this.contactForm.value.profile,
      typeForm: 2,
    };
    this.isLoading = true;
    this.contactService.setContact(contact).subscribe((data: any) => {
      this.status = 'ok';
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.status = 'error';
      this.message = error.message;
    });
  }

  submit() {
    this.sendData();
  }

  direct() {
    this.isShowError = true;
  }

}
