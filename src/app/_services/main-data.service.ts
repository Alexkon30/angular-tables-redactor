import { Injectable } from '@angular/core';
import { MethodResponse, RowData, TableData } from '@app/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainDataService {
  private mainDataSource = new BehaviorSubject<TableData>([
    { name: 'Name 1', year: '2010' },
    { name: 'Name 2', year: '1997' },
    { name: 'Name 3', year: '2004' },
  ]);
  mainData = this.mainDataSource.asObservable();

  constructor() {}

  setData(data: string): MethodResponse {
    let response = {
      ok: false,
      message: '',
    };

    let result = this.validate(data);

    if (result.ok && result.value) {
      this.mainDataSource.next(result.value);
      response.ok = true;
    } else {
      response.message = result.message
    }

    return response;
  }

  private validate(data: string): MethodResponse & { value?: TableData } {
    let response = {
      ok: false,
      message: '',
      value: [{}]
    };

    //check data length
    if (data.length <= 4) {
      response.message = 'invalid length of data';
      return response;
    }

    let jsonData;

    //check valid json format
    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      if (typeof e === 'string') {
        response.message = e.toUpperCase();
      } else if (e instanceof Error) {
        response.message = e.message;
      }
      return response;
    }

    //check is array
    if (!Array.isArray(jsonData)) {
      response.message = 'Main object must be an array'
      return response
    }

    //check length of array
    if (jsonData.length === 0) {
      response.message = 'Array must contain at least one element'
      return response
    }

    //check content of array
    for (let elem of jsonData) {
      //check for every element is object
      if (!this.isObject(elem)) {
        response.message = 'Array must contain objects'
        return response
      }

      //check for every element contain primitive data
      let titles = Object.keys(elem)
      let primitives = ['string', 'number', 'boolean']
      for (let title of titles) {
        if (primitives.indexOf(typeof elem[title]) === -1) {
          response.message = 'Every object must contain only primitives'
          return response
        }
      }
    }

    //check for same keys in all objects
    let firstObjectKeys = Object.keys(jsonData[0]) 

    if(jsonData.length > 1) {
      for (let i = 1; i < jsonData.length; i++) {
        let objKeys = Object.keys(jsonData[i])

        //check length
        if (firstObjectKeys.length !== objKeys.length) {
          response.message = 'Elements has different keys'
          return response
        }

        for (let key of objKeys) {
          if(firstObjectKeys.indexOf(key) === -1) {
            response.message = 'The elements must have the same keys'
            return response  
          }
        }
      }
    }

    //more checks

    response.value = jsonData
    response.ok = true;
    return response;
  }

  private isObject(objValue: any) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
  }

  addRow() {
    let curData = this.mainDataSource.getValue();
    if (curData.length > 0) {
      let newRow: RowData = {};
      for (let key of Object.keys(curData[0])) {
        newRow[key] = '';
      }
      curData.push(newRow);
    } else {
      curData.push({});
    }

    this.mainDataSource.next(curData);
  }

  addColumn(title: string): MethodResponse {
    let response = {
      ok: false,
      message: '',
    };

    let curData = this.mainDataSource.getValue();
    let keys = Object.keys(curData[0]);

    if (keys.indexOf(title) === -1) {
      let newData = curData.map((r) => ({ ...r, [title]: '' }));
      this.mainDataSource.next(newData);
      response.ok = true;
    } else {
      response.message = 'This title is not unique';
    }

    return response;
  }

  renameColumn(oldTitle: string, newTitle: string) {
    let curData = this.mainDataSource.getValue();
    let newData = curData.map((r) => {
      r[newTitle] = r[oldTitle];
      delete r[oldTitle];
      return r;
    });
    this.mainDataSource.next(newData);
  }

  updateRow(index: number, updatedRow: RowData) {
    let curData = this.mainDataSource.getValue();
    curData[index] = updatedRow;
    this.mainDataSource.next(curData);
  }

  deleteRow(index: number) {
    let curData = this.mainDataSource.getValue();
    curData.splice(index, 1);
    this.mainDataSource.next(curData);
  }
}
