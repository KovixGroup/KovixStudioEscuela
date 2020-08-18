import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { School } from '../../school';

@Component({
  selector:    'app-school-detail-page',
  templateUrl: './school-detail.page.component.html',
  styleUrls:   ['./school-detail.page.component.scss']
})
export class SchoolDetailPageComponent extends DetailsComponent<School> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(School, shell, activatedRoute);
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
          this.shell.triggerUseCase(School, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(School, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
