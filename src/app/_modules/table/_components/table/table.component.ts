import { Component, Input } from '@angular/core';
import { TableData } from '@app/types';

@Component({
  selector: '[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableData: TableData
  @Input() headers: string[]
}
