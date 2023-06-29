import { Injectable } from '@angular/core';
import { RowData, TableData } from '@app/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainDataService {
  private mainDataSource = new BehaviorSubject<TableData>([
    {"name":"Name 1","year":"2010"},
    {"name":"Name 2","year":"1997"},
    {"name":"Name 3","year":"2004"}]);
  mainData = this.mainDataSource.asObservable();

  constructor() {}

  addRow() {
    let curData = this.mainDataSource.getValue()
    if (curData.length > 0) {
      let newRow:RowData = {}
      for (let key of Object.keys(curData[0])) {
        newRow[key] = ''
      }
      curData.push(newRow)
    } else {
      curData.push({})
    }
    
    this.mainDataSource.next(curData)
  }

  addColumn(title: string) {
    let curData = this.mainDataSource.getValue()
    let newData = curData.map(r => ({...r, [title]: ''}))
    this.mainDataSource.next(newData)
  }

  renameColumn(oldTitle: string, newTitle: string) {
    let curData = this.mainDataSource.getValue()
    let newData = curData.map(r => {
      r[newTitle] = r[oldTitle]
      delete r[oldTitle]
      return r
    })
    this.mainDataSource.next(newData)
  }

  updateRow(index: number, updatedRow: RowData) {
    let curData = this.mainDataSource.getValue()
    curData[index] = updatedRow
    this.mainDataSource.next(curData)
  }

  deleteRow(index: number) {
    let curData = this.mainDataSource.getValue()
    curData.splice(index, 1)
    this.mainDataSource.next(curData)
  }
}
