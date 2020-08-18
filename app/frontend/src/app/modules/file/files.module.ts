import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { File } from './file';
import { FileInputComponent } from './components/file-input/file-input.component';
import { SharedModule } from '../../shared/shared.module';
import { SkfModule } from '@skyframe/angular';

@NgModule({
  declarations: [FileInputComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [FileInputComponent]
})
@SkfModule({
  entities: [File]
})
export class FilesModule {}
