import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartStats: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createChart();
  }

  onChangelogButtonClick() {
    this.router.navigate(['/changelog']);
  }

  public createChart() {
    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: 10, max: 50 };

    this.chartStats = new Chart("stats", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Total sales',
            data: [26, 39, 23, 32, 41, 19, 36, 16, 28, 44, 21, 37],
            borderColor: '#F4B942',
            backgroundColor: 'rgba(244, 185, 66, 0.5)',
          },
          {
            label: 'Total purchases',
            data: [35, 20, 27, 40, 16, 42, 18, 31, 22, 38, 29, 17],
            borderColor: '#1E1E1E',
            backgroundColor: 'rgba(30, 30, 30, 0.5)',
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 2.5,
        scales: {
          y: {
            suggestedMin: 10,
            suggestedMax: 50
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}