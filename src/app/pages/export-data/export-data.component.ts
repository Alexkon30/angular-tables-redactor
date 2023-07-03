import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainDataService, ExportService } from '@app/_services';
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

  constructor(private mainDataService: MainDataService, private clipboard: Clipboard, private exportService: ExportService) {}

  ngOnInit(): void {
    this.subscription = this.mainDataService.mainData.subscribe(
      (data) => {
        this.tableData = data
      }
    );
  }

  saveCSV() {
    this.exportService.exportToCsv(this.tableData, new Date().toISOString())
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
