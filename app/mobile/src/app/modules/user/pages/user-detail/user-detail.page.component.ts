import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent, Shell } from '@skyframe/angular';
import Swal from 'sweetalert2';
import { User } from '../../user';

@Component({
  selector:    'app-user-detail-page',
  templateUrl: './user-detail.page.component.html',
  styleUrls:   ['./user-detail.page.component.scss']
})
export class UserDetailPageComponent extends DetailsComponent<User> {
  constructor(shell: Shell, activatedRoute: ActivatedRoute) {
    super(User, shell, activatedRoute);
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
          this.shell.triggerUseCase(User, 'list');
        });
      }
    });
  }

  editEntity(): Promise<boolean> {
    return this.shell.triggerUseCase(User, 'edit', [
      this.state.getValue().entityId
    ]);
  }
}
