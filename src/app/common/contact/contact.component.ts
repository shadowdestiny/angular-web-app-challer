import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ContactModel} from '../../models/contact.model';
import {ContactService} from '../../service/contact.service';
import {SubjectModel} from '../../models/subject.model';
import {ResizeConstants} from '../../store/constants/resize.constants';
import {Subscription} from 'rxjs';
import {StoreService} from '../../service/store.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private store: StoreService
  ) {
  }

  message;
  status;
  isLoading = false;
  subjects: Array<SubjectModel>;
  isShowError = false;

  subscribes: Subscription[] = [];
  isMobile = false;

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
    support: ['', Validators.required],
    comment: ['', Validators.required],
    recaptchaReactive: new FormControl(null, Validators.required),
  });

  getResize() {
    this.subscribes.push(this.store.getResizeStore().subscribe((data: any) => {
      if (data.status === ResizeConstants.START) {
        this.isMobile = data.resize.isMobile;
      }
    }));
  }

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
    this.getResize();
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

  ngOnDestroy() {
    this.subscribes.forEach((e: Subscription) => {
      e.unsubscribe();
    });
  }

}
