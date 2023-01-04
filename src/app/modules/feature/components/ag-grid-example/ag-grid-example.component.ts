import { Component, OnInit } from '@angular/core';
//import { AgGridCheckboxComponent } from '../ag-grid-checkbox/ag-grid-checkbox.component';
import { ApiService } from 'src/app/services/api.service';
import { concatMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

var checkboxSelection = function (params) {
  return params.columnApi.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (params) {
  return params.columnApi.getRowGroupColumns().length === 0;
};

@Component({
  selector: 'app-ag-grid-example',
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.css']
})
export class AgGridExampleComponent implements OnInit {




  columnDefs;


  private gridApi;
  private gridColumnApi;



  rowData = [
  ];


  pageSize = 10;


  gridOptions = {
    animateRows: true,
    enableSorting: true,
    enableCellChangeFlash: true,
    onGridReady: params => {
      params.api.sizeColumnsToFit();
    }
  };

  defaultColDef

  rowSelection
  rowGroupPanelShow
  pivotPanelShow
  autoGroupColumnDef
  url
  currentlyRunningTask

  constructor(private api: ApiService) { }

  ngOnInit() {

   
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 10,
       width: 50,
        pinned: 'left',
        checkboxSelection: checkboxSelection,
        headerCheckboxSelection: headerCheckboxSelection,
      },
      { headerName: 'MOB', field: 'mobile', width: 140, },
      { headerName: 'Registered Already', field: 'alreadyregisted', width: 100 },

      { headerName: 'Duplicate User', field: 'isduplicate', width: 100 },
      { headerName: 'OTP not Arrived', field: 'otpnotarrived', width: 100 },
      { headerName: 'Wrong OTP', field: 'wrongotp', width: 100 },
      { headerName: 'Error Reason', field: 'Some Error', width: 100 },
      { headerName: 'lastUpdated', field: 'lastupdated', width: 350 },
    ];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 170,
      field: 'athlete',
      valueGetter: function (params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    };
    this.defaultColDef = {
      editable: false,
      // enableRowGroup: true,
      // enablePivot: true,
      // enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      // flex: 1,
      // minWidth: 100,
    };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
    //this.onPageSizeChanged();
  }

  getAll() {
    this.api.getRecords().subscribe((res: any) => {
      //console.log("rr", res)
      this.rowData = res;
    })
  }

  trigger() {
    const selectedData = this.gridApi.getSelectedRows();
    console.log("fff", selectedData)
    const ap = []
    selectedData.forEach(e => ap.push(this.api.startOrder(e.mobile)))


    const mobiles= selectedData.map(e=> e.mobile)
    var i=-1;
    from(mobiles).pipe(
      tap(e=> this.currentlyRunningTask= e),
      concatMap((client: any) => this.api.startOrder(client))
      //   (e: any) => concatMap((z: any) => <Observable<any>>this.api.startOrder(e.mobile)))
  )    .subscribe((res: any) => {


    if(res &&  res.status== false && res.message=='Some Error Occured'){
      this.api.saveError().subscribe(r=>console.log(r))
    }
      console.log("trigger",res)
    })

  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //console.log(this.gridColumnApi)
    this.onPageSizeChanged();
    this.getAll();
  }


  onPageSizeChanged() {
    this.gridApi.paginationSetPageSize(Number(this.pageSize));
  }
  getImage() {
    this.api.getImage('URL').subscribe(x => this.url = x)
  }

}