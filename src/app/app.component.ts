import { Component,ViewChild,OnInit } from '@angular/core';
import { DxSelectBoxComponent, DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Currency = ['INR', '$'];
  AwardType=['CISCO','HCL','HCL-R','CCISCO','CHCL'];
  date: Date = new Date();
  
  @ViewChild('employeeNo',{static:true})EmployeeNo:DxTextBoxComponent;
  @ViewChild('currency',{static:true}) CurrencyType: DxSelectBoxComponent; 
  @ViewChild('amount',{static:true})Amount:DxTextBoxComponent;
  @ViewChild('awardType',{static:true})SparcAwardType:DxSelectBoxComponent;
 

}
