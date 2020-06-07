import { Component, OnInit } from '@angular/core';
import {StatasticsService} from '../app-endpoint.service';
import {GlobalStatasticsResponse} from '../models/global-stats.model';
import {GlobalStatastics} from '../models/global-stats.model';

@Component({
  selector: 'global-stats-numbers',
  templateUrl: './global-stats-numbers.component.html',
  styleUrls: ['./global-stats-numbers.component.scss']
})

export class GlobalStatsNumbersComponent implements OnInit {
  public stats: GlobalStatastics = new GlobalStatastics();
  constructor(private statsService: StatasticsService) {}
  ngOnInit(): void {
    console.log("initiated");
    this.statsService.getStats().subscribe(
      (data: GlobalStatasticsResponse)=>{
        this.stats = data.data;
      }
    );
  }
}