import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate(coins: Number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=1`);
  }

  getMarketPrice() {
    return this.http.get<any>(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
      .pipe(map(res=>res))
    
  }

}
