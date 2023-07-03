import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RowData } from '@app/types';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent {
  @Input() type: string = 'body';
  @Input() rowData: RowData = {};
  @Input() titles: Array<string>;
  @Input() index: number;
}
