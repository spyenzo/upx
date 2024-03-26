import { Energy } from '../../interfaces/energy/Energy';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { EnergyService } from './../../services/energy/energy.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopBarComponent, LineChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private energyService: EnergyService) { }
  public list : Energy[] = []

  ngOnInit() {
    this.energyService.getEnergy().subscribe(result => this.list = result);
  }


}
