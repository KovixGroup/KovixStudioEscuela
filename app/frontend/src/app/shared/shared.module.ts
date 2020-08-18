import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { NgModule } from '@angular/core';
import { DataLoadingComponent } from './components/data-loading/data-loading.component';

@NgModule({
  declarations: [DataLoadingComponent, CancelButtonComponent],
  imports: [],
  providers: [],
  exports: [DataLoadingComponent, CancelButtonComponent]
})
export class SharedModule {}
