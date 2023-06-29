import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainDataService } from '@app/_services';
import { TableData } from '@app/types';
import { Subscription } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard'

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.scss']
})
export class ExportDataComponent implements OnInit, OnDestroy {
  tableData: TableData
  subscription: Subscription

  constructor(private mainDataService: MainDataService, private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.subscription = this.mainDataService.mainData.subscribe(
      (data) => {
        this.tableData = data
      }
    );
  }

  get jsonStringData() {
    return JSON.stringify(this.tableData)
  }

  copyToClipboard() {
    this.clipboard.copy(this.jsonStringData)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
