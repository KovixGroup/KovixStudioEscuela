import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-autocomplete',
  templateUrl: './course-enrollment-autocomplete.component.html',
  styleUrls:   ['./course-enrollment-autocomplete.component.scss']
})
export class CourseEnrollmentAutocompleteComponent extends PickerComponent<CourseEnrollment> {

  constructor(shell: Shell) {
    super(CourseEnrollment, shell);
  }

  selectedDisplayText(option: CourseEnrollment): string {
    return `${option.courseId}`;
  }
}
