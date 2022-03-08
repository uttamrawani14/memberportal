import { Component, OnInit } from '@angular/core';
import { single } from './healthdonutdata';

@Component({
  selector: 'app-healthdonut',
  templateUrl: './healthdonut.component.html',
  styleUrls: ['./healthdonut.component.css']
})
export class HealthdonutComponent implements OnInit {



  single: any[];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#ffcc00', '#0c72ba', '#f06065']
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


  ngOnInit(): void {
  }

}
