import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label ,Color} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title: string = "Sin titulo";

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
      [350, 450, 100]
  ];

  // @Input('param2') donut: Label[] = ['Vino', 'Vodka', 'Moropotente'];
  // @Input('data2') donutData: MultiDataSet = [
  //     [20, 20, 60]
  // ];
  
  public doughnutChartType: ChartType = 'doughnut';
  public colors : Color[]=[
       { backgroundColor:['9E120E','#FF5800','#FFB414'] }
  ];

}
