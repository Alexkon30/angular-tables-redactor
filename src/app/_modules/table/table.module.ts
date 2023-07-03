import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CellComponent,
  TableComponent,
} from './_components';

@NgModule({
  declarations: [ TableComponent, CellComponent],
  imports: [CommonModule],
  exports: [TableComponent],
})
export class TableModule {}
