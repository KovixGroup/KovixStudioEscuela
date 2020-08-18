import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { Course } from '../../course';

@Component({
  selector:    'app-course-autocomplete',
  templateUrl: './course-autocomplete.component.html',
  styleUrls:   ['./course-autocomplete.component.scss']
})
export class CourseAutocompleteComponent extends PickerComponent<Course> {

  constructor(shell: Shell) {
    super(Course, shell);
  }

  selectedDisplayText(option: Course): string {
  return `${option.name}`;
}
}
