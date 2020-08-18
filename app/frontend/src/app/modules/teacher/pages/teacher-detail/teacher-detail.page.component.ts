import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { Teacher } from '../../teacher';

@Component({
  selector:    'app-teacher-detail-page',
  templateUrl: './teacher-detail.page.component.html',
  styleUrls:   ['./teacher-detail.page.component.scss']
})
export class TeacherDetailPageComponent extends DetailsComponent<Teacher> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Teacher, shell, activatedRoute);
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
          this.shell.triggerUseCase(Teacher, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(Teacher, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
