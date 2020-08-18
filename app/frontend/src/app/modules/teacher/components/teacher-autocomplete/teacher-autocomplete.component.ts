import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-autocomplete',
  templateUrl: './teacher-autocomplete.component.html',
  styleUrls:   ['./teacher-autocomplete.component.scss']
})
export class TeacherAutocompleteComponent extends PickerComponent<Teacher> {

  constructor(shell: Shell) {
    super(Teacher, shell);
  }

  selectedDisplayText(option: Teacher): string {
    return `${option.firstName}`;
  }
}
