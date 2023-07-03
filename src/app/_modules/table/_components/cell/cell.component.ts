import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MainDataService } from '@app/_services';

@Component({
  selector: '[app-cell]',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {
  @ViewChild('inputRef') input: ElementRef<HTMLInputElement>;

  @Input() data: string | number
  @Input() type: 'title' | 'data' | 'index'
  @Input() index: number
  @Input() title: string
  mode: 'show' | 'modify' = 'show'

  constructor(private dataService: MainDataService) {}

  confirmData(value: string) {
    let response

    if (this.type === 'title') {
      response = this.dataService.renameColumn(this.data.toString(), value)
    } else {
      response = this.dataService.updateCell(this.index, this.title, value)
    }

    if (response.ok) {
      this.mode = 'show'
    } else {
      alert(response.message)
    }
  }

  cancel() {
    this.mode = 'show'
  }

  modifyData() {
    this.mode = 'modify'
  }
}
