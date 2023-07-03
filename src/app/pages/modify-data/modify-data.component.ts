import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainDataService } from '@app/_services';
import { TableData } from '@app/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-data',
  templateUrl: './modify-data.component.html',
  styleUrls: ['./modify-data.component.scss'],
})
export class ModifyDataComponent implements OnInit, OnDestroy {
  tableData: TableData;
  subscription: Subscription;

  constructor(
    private mainDataService: MainDataService,
  ) {}

  addRow() {
    this.mainDataService.addRow()
  }

  ngOnInit(): void {
    this.subscription = this.mainDataService.mainData.subscribe((data) => {
      this.tableData = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get headers() {
    return this.tableData.length > 0 ? Object.keys(this.tableData[0]) : [''];
  }
}
