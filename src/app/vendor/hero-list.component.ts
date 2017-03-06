import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { ICustomer } from '../shared/interfaces';
import { IVendor } from '../shared/interfaces';


@Component({
    moduleId: module.id,
    selector: 'customers',
    //templateUrl: 'vendor.component.html'
    template: 
             `
            <!-- Added navbar to switch between list view shown in video and new edit view -->
            <div class="container" style="margin-top: 10px;">
            <div class="navbar">
                <ul class="nav navbar-nav">
                    <li class="toolbar-item">
                        <a (click)="editViewEnabled=false" [class.active]="!editViewEnabled">
                            <span class="glyphicon glyphicon-align-justify"></span> List View
                        </a>
                    </li>
                    <li class="toolbar-item">
                        <a (click)="editViewEnabled=true" [class.active]="editViewEnabled">
                            <span class="glyphicon glyphicon-pencil"></span> Edit View
                        </a>
                    </li>
                </ul>
            </div>
            
            <ul [hidden]="editViewEnabled">
            <table class="table">
                                <tr>
                                    <th>#</th>
                                    <th>Customer Name</th>
                                    <th>Address</th> 
                                    <th>EmailId</th>
                                </tr>
                <tr *ngFor="let vendor of vendors | paginate: {itemsPerPage: 2, currentPage:page, id: '1'}; let i = index">
                    <td>{{i + 1}}</td>
                    <td> {{ vendor.firstName  }}</td>
                    <td> {{ vendor.lastName }}</td>
                    <td> {{ vendor.emailId }}</td>
                
                </tr>
                </table>
            </ul>

            <!-- Added editable list for doing an HTTP PUT -->
            <div [hidden]="!editViewEnabled">
            
                <div class="container" *ngFor="let vendor of vendors | paginate: {itemsPerPage: 2, currentPage:page, id: '1'}; let i = index">
                
                    <div class="row" [hidden]="editId===vendor.id">
                       
                        <table class="table">
                        <tr>
                            <td>{{i + 1}}</td>
                            <td> {{ vendor.firstName  }}</td>
                            <td> {{ vendor.lastName }}</td>
                            <td> {{ vendor.emailId }}</td>
                           
                             <td>
                                <div class="col-md-8">
                                    <span class="btn btn-success pull-left" 
                                        (click)="editId=vendor.id">Edit</span>
                                </div>
                             </td>
                         </tr>
                         </table>
                         
                    </div>
                    <div [hidden]="editId!==vendor.id">
                    
                     <table class="table">
                        <tr>
                        <td>{{i + 1}}</td>
                        <td>Customer First Name: <input [(ngModel)]="vendor.firstName" />&nbsp;</td>
                        <td>Customer Last Name: <input [(ngModel)]="vendor.lastName" /></td>
                        <td>Customer Email Address: <input [(ngModel)]="vendor.emailId" /></td>
                        <td><span class="btn btn-success" (click)="save(vendor)">Save</span>&nbsp;</td>
                        <td><span class="btn btn-default" (click)="editId=0">Cancel</span></td>
                        </tr>
                         </table>
                        
                    </div>
                    <br />
                </div>
            
                <span class="alert alert-danger" [hidden]="!errorMessage">{{ errorMessage }}</span>
                </div>

                    <pagination-controls (pageChange)="page = $event" id="1"
                    maxSize="5"
                    directionLinks="true"
                    autoHide="true">
                    </pagination-controls>
            </div>
            `
})
export class HeroListComponent implements OnInit { 
    
    
    vendors: IVendor[] = [];

constructor(private dataService: DataService) {  }

ngOnInit() {
   
    console.log("********************** HeroListComponent CustomersComponent");
    this.dataService.getCustomersSummary()
        .subscribe((data: IVendor[]) => this.vendors = data);
    
    console.log("********************** HeroListComponent After calling the data service");
}
    
    
}