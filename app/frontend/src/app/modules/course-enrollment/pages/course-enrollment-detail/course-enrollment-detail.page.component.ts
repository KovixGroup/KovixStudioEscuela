import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { CourseEnrollment } from '../../course-enrollment';

@Component({
  selector:    'app-course-enrollment-detail-page',
  templateUrl: './course-enrollment-detail.page.component.html',
  styleUrls:   ['./course-enrollment-detail.page.component.scss']
})
export class CourseEnrollmentDetailPageComponent extends DetailsComponent<CourseEnrollment> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(CourseEnrollment, shell, activatedRoute);
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
          this.shell.triggerUseCase(CourseEnrollment, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(CourseEnrollment, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
