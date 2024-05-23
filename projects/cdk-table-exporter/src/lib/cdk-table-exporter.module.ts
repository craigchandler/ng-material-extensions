import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CdkTableModule,
    ClipboardModule
  ],
  exports: []
})
export class CdkTableExporterModule { }
