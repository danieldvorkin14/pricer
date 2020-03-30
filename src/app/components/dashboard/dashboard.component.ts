import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'angular-highcharts';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface Type {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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

  chart1 = new Chart({
    chart: {
      type: 'line',
      height: '400px'
    },
    title: { text: 'Chart 1' },
    credits: { enabled: false },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type: undefined
      }
    ]
  });

  add(chart){
    this[chart].addPoint(Math.floor(Math.random() * 10));
  }

  constructor() { }

  ngOnInit(){
    this.dataSource.sort = this.sort;
  }
}