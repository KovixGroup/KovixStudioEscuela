import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { Student } from '../../student';

@Component({
  selector:    'app-student-autocomplete',
  templateUrl: './student-autocomplete.component.html',
  styleUrls:   ['./student-autocomplete.component.scss']
})
export class StudentAutocompleteComponent extends PickerComponent<Student> {

  constructor(shell: Shell) {
    super(Student, shell);
  }

  selectedDisplayText(option: Student): string {
    return `${option.firstName}`;
  }
}
