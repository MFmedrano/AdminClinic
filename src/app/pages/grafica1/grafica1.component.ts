import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label ,Color} from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[]= ['Pan', 'Refresco', 'Taco'];
  public data1 = [
    [10, 20, 70]
  ];

  public labels2: string[]= ['Vino', 'Vodka', 'Moropotente'];
  public data2 = [
    [15, 45, 40]
  ];
    
}
