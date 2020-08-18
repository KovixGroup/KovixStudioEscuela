import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss']
})
export class CancelButtonComponent {
  @Output()
  click = new EventEmitter<void>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onClick() {
    this.click.emit();
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }
}
