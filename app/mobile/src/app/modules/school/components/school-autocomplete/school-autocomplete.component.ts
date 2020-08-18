import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { School } from '../../school';

@Component({
  selector:    'app-school-autocomplete',
  templateUrl: './school-autocomplete.component.html',
  styleUrls:   ['./school-autocomplete.component.scss']
})
export class SchoolAutocompleteComponent extends PickerComponent<School> {

  constructor(shell: Shell) {
    super(School, shell);
  }

  selectedDisplayText(option: School): string {
  return `${option.name}`;
}
}
