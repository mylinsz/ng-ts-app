import { Component, OnInit } from '@angular/core';

import { PopularScienceService } from '../api/popular-science.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})

export class InformationComponent implements OnInit {

  constructor(
    public http: PopularScienceService
  ) { }

  dataSet: any[] = [];
  recordCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;
  paginationFlag: boolean = false;

  ngOnInit() {
    this.getList();
  }

  getList({pageNumber = 1, pageSize = 10} = {}) {
  // getList(params) {
    // const { labelId, status, title, classId = this.classId, pageNumber, pageSize } = this.$data
    // const data = { labelId, status, title, classId, pageNumber, pageSize }
    // Object.assign(data, params)
    this.http.getTableData({
      classId: '',
      labelId: '',
      pageNumber: pageNumber,
      pageSize: pageSize,
      status: '',
      title: ''
      // data
    }).subscribe((data) => {
      this.dataSet = []
      const d: any = data;
      this.dataSet = d.records;
      this.recordCount = d.recordCount;
      this.pageNumber = d.pageNumber;
      this.pageSize = d.pageSize;
      this.paginationFlag = false;
    })
  }

  // in component
  // handle(ref: any): void {
  //   // console.log(ref)
  //   // console.log(ref.index)
  //   // console.log(ref.rowData)
  //   // console.log(ref.innerHTML)
  //   // ref.destroy()
  // }

  /**
   * 页码改变的回调
   *
   * @param {number} pageNumber
   * @memberof InformationComponent
   */
  pageIndexChange(pageNumber: number) {

    if (this.paginationFlag) {
      return;
    }
    this.getList({pageNumber: pageNumber});
  }

  /**
   * 每页条数改变的回调
   *
   * @param {number} pageSize
   * @memberof InformationComponent
   */
  pageSizeChange(pageSize: number) {
    // console.log(pageSize)
    this.paginationFlag = true;
    this.getList({
      pageSize: pageSize
    })

    // this.pagination_flag = true
    // this.$nextTick(() =>
    //   this.getTableData({
    //     'pageSize': val
    //   })
    // )
  }

  formatClassify(data: any) {
    // console.log('formatClassify--->', data)
    const arr = [];
    // if (data.classifyId1) {
    //   arr.push(this.$t('product.product[' + data.classifyId1 + ']'))
    //   if (data.classifyId2) {
    //     arr.push(this.$t('product.product[' + data.classifyId2 + ']'))
    //     if (data.classifyId3) {
    //       arr.push(this.$t('product.product[' + data.classifyId3 + ']'))
    //     }
    //   }
    // }
    if (data.classifyId1) {
      arr.push(data.classifyId1);
      if (data.classifyId2) {
        arr.push(data.classifyId2);
        if (data.classifyId3) {
          arr.push(data.classifyId3);
        }
      }
    }
    return arr.join('-');
  }

}
