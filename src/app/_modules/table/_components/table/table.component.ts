import { Component, Input } from '@angular/core';
import { ModalComponent } from '@app/_components';
import { TableData } from '@app/types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableData: TableData
  @Input() headers: string[]

  showAddBtn = false;

  constructor(private modalService: NgbModal) {}

  createNewColumn() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Enter title for new column';
  }

  displayBtn() {
    this.showAddBtn = true;
  }

  hideBtn() {
    this.showAddBtn = false;
  }

}
