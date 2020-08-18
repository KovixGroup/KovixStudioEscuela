import { Component } from '@angular/core';
import { PickerComponent, Shell } from '@skyframe/angular';
import { User } from '../../user';

@Component({
  selector:    'app-user-autocomplete',
  templateUrl: './user-autocomplete.component.html',
  styleUrls:   ['./user-autocomplete.component.scss']
})
export class UserAutocompleteComponent extends PickerComponent<User> {

  constructor(shell: Shell) {
    super(User, shell);
  }

  selectedDisplayText(option: User): string {
    return `${option.email}`;
  }
}
