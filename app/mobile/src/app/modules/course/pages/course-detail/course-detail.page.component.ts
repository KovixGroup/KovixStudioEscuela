import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { Course } from '../../course';

@Component({
  selector:    'app-course-detail-page',
  templateUrl: './course-detail.page.component.html',
  styleUrls:   ['./course-detail.page.component.scss']
})
export class CourseDetailPageComponent extends DetailsComponent<Course> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(Course, shell, activatedRoute);
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
          this.shell.triggerUseCase(Course, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(Course, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
