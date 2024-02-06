import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  constructor(private http: HttpClient) {}

  sendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = {
        name: contactForm.value.name,
        email: contactForm.value.email,
        message: contactForm.value.message
      };

      // Replace 'your_backend_api_url' with the actual URL of your backend API that handles email sending.
      const apiUrl = 'your_backend_api_url';

      this.http.post(apiUrl, formData)
        .subscribe(
          response => {
            console.log('Email sent successfully:', response);
            // You can add additional logic here, like displaying a success message to the user.
          },
          error => {
            console.error('Error sending email:', error);
            // You can handle errors here, like displaying an error message to the user.
          }
        );
    }
  }
}
