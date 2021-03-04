import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ContactService} from '../../service/contact.service';
import {ContactJoinModel} from '../../models/contact.join.model';
import {ResizeConstants} from '../../store/constants/resize.constants';
import {Subscription} from 'rxjs';
import {StoreService} from '../../service/store.service';

@Component({
  selector: 'app-contact-join',
  templateUrl: './contact-join.component.html',
  styleUrls: ['./contact-join.component.scss']
})
export class ContactJoinComponent implements OnInit, OnDestroy  {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private store: StoreService,
  ) {
  }

  recaptcha: any[];
  message;
  status;
  isLoading = false;
  isShowError = false;
  subscribes: Subscription[] = [];
  isMobile = false;

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
    comment: ['', Validators.required],
    profile: ['', [Validators.required, Validators.pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})')]],
    recaptchaReactive: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.getResize();
  }

  getResize() {
    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        this.isMobile = data.resize.isMobile;
      }
    }));
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

  ngOnDestroy() {
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    });
  }

}
