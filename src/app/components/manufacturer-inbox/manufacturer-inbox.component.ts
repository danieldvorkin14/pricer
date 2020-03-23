import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  name: string;
  position: number;
  weight: number;
  email: string;
}

interface Type {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: UserData[] = [
  {position: 1, name: 'Test User 1', weight: 120, email: 'test1@email.com'},
  {position: 2, name: 'Test User 2', weight: 150, email: 'test2@email.com'},
  {position: 3, name: 'Test User 3', weight: 125, email: 'test3@email.com'},
  {position: 4, name: 'Test User 4', weight: 165, email: 'test4@email.com'},
  {position: 5, name: 'Test User 5', weight: 145, email: 'test5@email.com'},
  {position: 6, name: 'Test User 6', weight: 135, email: 'test6@email.com'},
  {position: 7, name: 'Test User 7', weight: 170, email: 'test7@email.com'},
  {position: 8, name: 'Test User 8', weight: 175, email: 'test8@email.com'},
  {position: 9, name: 'Test User 9', weight: 180, email: 'test9@email.com'},
  {position: 10, name: 'Test User 10', weight: 165, email: 'test10@email.com'},
];

@Component({
  selector: 'app-manufacturer-inbox',
  templateUrl: './manufacturer-inbox.component.html',
  styleUrls: ['./manufacturer-inbox.component.scss']
})
export class ManufacturerInboxComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  selectedValue: string;

  types: Type[] = [
    {value: 'mine-0', viewValue: 'Mine'},
    {value: 'others-1', viewValue: 'Other'},
    {value: 'all-2', viewValue: 'All'},
    {value: 'price-exp-3', viewValue: 'PriceExp'},
    {value: 'spec-exp-4', viewValue: 'SpecExp'},
    {value: 'project-5', viewValue: 'Project'},
    {value: 'central-6', viewValue: 'Central'},
    {value: 'pricing-7', viewValue: 'Pricing'},
    {value: 'wip-8', viewValue: 'WIP'}
  ];

  constructor() { }

  ngOnInit(){
    this.dataSource.sort = this.sort;
  }

}
