import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#A94728',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#3BA928',
                '#28A99C',
                '#8928A9',
                '#A9287B',
                '#A9284B',

            ],
        }
    ],
    labels: []
};

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createChart();
    });
  }

  createChart(){
  //var ctx = document.getElementById('myChart').getContext("2d");
  var ctx = document.getElementById('myChart');
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: this.dataSource
  });
}

}
