import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;

  userModel = new User('Rob', 'rob@test.com', 3211549126, 'default', 'morning', true);

  constructor(private _enrolmentService: EnrollmentService) {}

  validateTopic(value: any) {
        if(value == 'default') {
          this.topicHasError = true;
        } else {
          this.topicHasError = false
       }
  }

  onSubmit() {
    this.submitted = true;
    this._enrolmentService.enrol(this.userModel)
        .subscribe(
          data => console.log('Success', data),
          error => console.log('Error', error)
        )
  }

}
