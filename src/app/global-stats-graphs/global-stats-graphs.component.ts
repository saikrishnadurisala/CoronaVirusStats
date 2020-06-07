import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { GlobalStatastics, GlobalStatasticsResponse } from '../models/global-stats.model';
import { StatasticsService } from '../app-endpoint.service';
import { BaseChartDirective } from 'ng2-charts';
 
@Component({
  selector: 'global-stats-graphs',
  templateUrl: './global-stats-graphs.component.html',
  styleUrls: ['./global-stats-graphs.component.scss']
})
export class GlobalStatsGraphsComponent implements OnInit {
  public stats: GlobalStatastics = new GlobalStatastics();
  constructor(private statsService: StatasticsService) {}
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  ChartPrepared: boolean = false;
  public totalCasesLables = ['Recovered', 'Deceased'];
  public totalCasesData  = [10,20];
  public activeCasesLables = ['Critical', 'Mild'];
  public activeCasesData  = [10,20];
  public options = {
    legend: {
      display: false
    }
  };

  ngOnInit(): void {
    console.log("initiated");
    this.statsService.getStats().subscribe(
      (data: GlobalStatasticsResponse)=>{
        this.stats = data.data;
        var chartData=[];
        chartData.push(parseInt(data.data.closed_cases_recovered_percentage));
        chartData.push(parseInt(data.data.closed_cases_death_percentage));
        this.totalCasesData = chartData;
        chartData=[];
        chartData.push(parseInt(data.data.active_cases_critical_percentage));
        chartData.push(parseInt(data.data.active_cases_mild_percentage));
        this.activeCasesData =chartData;
        this.ChartPrepared = true;
        console.log(this.totalCasesData);
      }
    );
  }
  
}