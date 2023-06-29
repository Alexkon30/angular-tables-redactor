import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RowData } from '@app/types';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {
  @Input() type: string = 'body'
  @Input() rowData: RowData = {}
  @Input() titles: Array<string>
  @Input() index?: number

  ngOnInit(): void {
      // console.log(this.type, this.titles)
  }
}
