import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { SchoolClass } from '../../school-class';

@Component({
  selector:    'app-school-class-detail-page',
  templateUrl: './school-class-detail.page.component.html',
  styleUrls:   ['./school-class-detail.page.component.scss']
})
export class SchoolClassDetailPageComponent extends DetailsComponent<SchoolClass> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(SchoolClass, shell, activatedRoute);
  }

  public deleteEntity() {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'You wont be able to revert this action',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then(result => {
      if (result.value) {
        this.delete().subscribe(() => {
          Swal.fire('Deleted', 'success');
          this.shell.triggerUseCase(SchoolClass, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(SchoolClass, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
