import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CellComponent,
  RowComponent,
  TableComponent,
} from './_components';

@NgModule({
  declarations: [RowComponent, TableComponent, CellComponent],
  imports: [CommonModule],
  exports: [TableComponent],
})
export class TableModule {}
