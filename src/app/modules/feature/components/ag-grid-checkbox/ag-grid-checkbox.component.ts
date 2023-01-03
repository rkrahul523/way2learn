import { Component, OnInit } from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {IAfterGuiAttachedParams} from 'ag-grid';

@Component({
  selector: 'app-ag-grid-checkbox',
  templateUrl: './ag-grid-checkbox.component.html',
  styleUrls: ['./ag-grid-checkbox.component.css']
})
export class AgGridCheckboxComponent implements AgRendererComponent {

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  refresh(params: any): boolean {
    params.data.amount++;
    params.data.cbox = params.value
    console.log(params.value);
    params.api.refreshCells(params);
    return false;
  }
}