import { Energy } from './../../interfaces/energy/Energy';
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  public chart: any;
  @Input() energies !: Energy[];
  public powers : Number[] = [];
  public dates: String[] = [];

  ngOnInit(){
    console.log(this.energies)
    for (const { power, created_at } of this.energies) {
      this.powers.push(power)
      this.dates.push(created_at.toLocaleString())
    }
    console.log(this.powers)
    this.createChart()
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.dates,
	       datasets: [
          {
            label: "Sales",
            data: this.powers,
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
