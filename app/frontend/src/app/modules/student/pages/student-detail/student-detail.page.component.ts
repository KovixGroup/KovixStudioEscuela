import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { Student } from '../../student';

@Component({
  selector:    'app-student-detail-page',
  templateUrl: './student-detail.page.component.html',
  styleUrls:   ['./student-detail.page.component.scss']
})
export class StudentDetailPageComponent extends DetailsComponent<Student> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Student, shell, activatedRoute);
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
          this.shell.triggerUseCase(Student, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(Student, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
