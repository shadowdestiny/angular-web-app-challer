import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ContactModel} from '../../models/contact.model';
import {ContactService} from '../../service/contact.service';
import {SubjectModel} from '../../models/subject.model';

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
  isLoading = false;
  subjects: Array<SubjectModel>;
  isShowError = false;

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.required, Validators.email]],
    support: ['', Validators.required],
    comment: ['', Validators.required],
  });

  private preparingData() {
    this.subjects = [
      {
        name: 'Report a problem',
        value: 'Report a problem'
      },
      {
        name: 'Support requests',
        value: 'Support requests'
      },
      {
        name: 'Other',
        value: 'Other'
      }
    ];
  }

  ngOnInit(): void {
    this.preparingData();
  }

  sendData() {
    const contact: ContactModel = {
      fullName: this.contactForm.value.firstName,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.support,
      description: this.contactForm.value.comment,
      typeForm: 1
    };
    this.isLoading = true;
    // tslint:disable-next-line:no-shadowed-variable
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
