import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './layouts/blank/blank.component';
import { FormErrorWrapperComponent } from './form-error-wrapper/form-error-wrapper/form-error-wrapper.component';
import { FullComponent } from './layouts/full/full.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        FullComponent,
        BlankComponent,
        FormErrorWrapperComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        FormErrorWrapperComponent,
        FullComponent
    ],
  })
  export class SharedModule {}
  