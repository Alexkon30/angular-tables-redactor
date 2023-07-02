import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainDataService } from '@app/_services';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss'],
})
export class ImportDataComponent {
  tableData = '';
  tooltip = '';
  showTooltip = false;

  constructor(private dataService: MainDataService, private router: Router) {}

  setData() {
    let result = this.dataService.setData(this.tableData);

    if (result.ok) {
      this.router.navigateByUrl('/modify');
    } else {
      this.tooltip = result.message
      this.showTooltip = true;
    }
  }

  resetData() {
    this.tableData = '';
  }
}
