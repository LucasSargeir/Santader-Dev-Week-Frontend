import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    DashboardPageComponent,
    StockCardComponent
  ]
})
export class DashboardModule { }
