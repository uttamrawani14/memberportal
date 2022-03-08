import { Component, OnInit } from '@angular/core';
import { single } from 'src/app/services/data';

@Component({
  selector: 'app-life-chart',
  templateUrl: './life-chart.component.html',
  styleUrls: ['./life-chart.component.css']
})
export class LifeChartComponent {

  single: any[];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#C7B42C', '#7aa3e5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
