import { Component, OnInit } from '@angular/core';

import { PopularScienceService } from '../api/popular-science.service';

@Component({
  selector: 'app-popular-science',
  templateUrl: './popular-science.component.html',
  styleUrls: ['./popular-science.component.css']
})

export class PopularScienceComponent implements OnInit {

  constructor(
    public http: PopularScienceService
  ) { }

  tableData: any[] = [];
  recordCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;

  // _pageSize: number = 10;
  // set pageSize(val) {
  //   this._pageSize = val;
  // }

  // get pageSize(){
  //   return this._pageSize;
  // }

  ngOnInit() {
    this.getList();
  }

  getList(pageNumber = 1, pageSize = 10) {
    this.http.getTableData({
      classId: '',
      labelId: '',
      pageNumber: pageNumber,
      pageSize: pageSize,
      status: '',
      title: ''
    }).subscribe((data) => {
      const d: any = data;
      Object.assign(this.tableData, d.records);
      this.recordCount = d.recordCount;
      this.pageNumber = d.pageNumber;
      this.pageSize = d.pageSize;
    })
  }

  // in component
  handle(ref: any): void {
    // console.log(ref)
    // console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    // ref.destroy()
  }

  // 页码改变
  handleCurrentChange(pageNumber: number) {
    this.getList(pageNumber);
  }

}
