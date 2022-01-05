import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BitcoinService } from 'src/app/services/bitcoin.service';

Chart.register(...registerables);

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  marketPriceData: any

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<any> {
    let currMarketPriceData = await this.bitcoinService.getMarketPrice().toPromise()
    this.marketPriceData = currMarketPriceData
    let {values} = this.marketPriceData
  
    const myChart = new Chart("myChart", {
      type: 'line',
      data: {

          labels: values.map((item) =>
          new Date(item.x * 1000).toLocaleDateString()
        ),
          datasets: [{
              label: this.marketPriceData.name,
              data: values.map((item) => item.y),
              backgroundColor:
                  'rgba(255, 99, 132, 0.2)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
