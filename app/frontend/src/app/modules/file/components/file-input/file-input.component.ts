import { FormGroup, FormControlName, AbstractControl } from '@angular/forms';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  @Output()
  filesSelected: EventEmitter<FileList> = new EventEmitter<FileList>();

  constructor() {}

  onFileSelection(event: Event) {
    const input = event.target as HTMLInputElement;
    const files: FileList = input.files;
    this.filesSelected.emit(files);
  }
}
