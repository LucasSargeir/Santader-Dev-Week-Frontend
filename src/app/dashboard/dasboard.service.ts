import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  readonly baseUrl = 'https://santander-dev-week-sargeiro.herokuapp.com/bootcamp';

  constructor(private http:HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}

