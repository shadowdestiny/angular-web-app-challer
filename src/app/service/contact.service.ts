import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API} from "../config/api";
import {UtilsService} from "./utils.service";
import {ContactModel} from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public setContact(body: ContactModel) {
    let url = `${API.CONTACT}`;
    return this.http.post( url , body);
  }

  public setContactCv(body: ContactModel) {
    let url = `${API.CONTACT_CV}`;
    return this.http.post( url , body);
  }
}
