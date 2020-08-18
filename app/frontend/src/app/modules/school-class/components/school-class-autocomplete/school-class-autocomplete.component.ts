import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-autocomplete',
  templateUrl: './school-class-autocomplete.component.html',
  styleUrls:   ['./school-class-autocomplete.component.scss']
})
export class SchoolClassAutocompleteComponent extends PickerComponent<SchoolClass> {

  constructor(shell: Shell) {
    super(SchoolClass, shell);
  }

  selectedDisplayText(option: SchoolClass): string {
    return `${option.level}`;
  }
}
