import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStatsNumbersComponent } from './global-stats-numbers/global-stats-numbers.component';
import { GlobalStatsGraphsComponent } from './global-stats-graphs/global-stats-graphs.component';
import {StatasticsService} from './app-endpoint.service';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Routes, RouterModule} from "@angular/router";
import { ChartsModule } from 'ng2-charts';

const routes: Routes =[
  {
    path:'' ,
    component: GlobalStatsNumbersComponent
  },
  {
    path: 'globalgraph',
    component: GlobalStatsGraphsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GlobalStatsNumbersComponent,
    GlobalStatsGraphsComponent,
    NavBarTopComponent
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MDBBootstrapModule.forRoot()
  ],
  providers: [StatasticsService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
