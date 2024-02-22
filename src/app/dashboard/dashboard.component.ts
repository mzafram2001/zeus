import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartSales: any;
  public chartStats: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createChart();
  }

  onChangelogButtonClick() {
    this.router.navigate(['/changelog']);
  }

  onStatsButtonClick() {
    this.router.navigate(['/stats']);
  }

  public createChart() {
    this.chartSales = new Chart("sales", {
      type: 'line',
      data: {
        labels: ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],
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
        devicePixelRatio: 2,
        aspectRatio: 2.5,
        scales: {
          y: {
            suggestedMin: 10,
            suggestedMax: 5
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    this.chartStats = new Chart("stats", {
      type: 'radar',
      data: {
        labels: [
          '0-5 years',
          '6-11 years',
          '12-18 years',
          '14-26 years',
          '27-59 years',
          '+60 years',
        ],
        datasets: [{
          label: 'Year 2023',
          data: [25, 21, 26, 34, 25, 19],
          fill: true,
          backgroundColor: 'rgba(244, 185, 66, 0.2)',
          borderColor: '#F4B942',
          pointBackgroundColor: '#F4B942',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#F4B942'
        }, {
          label: 'Year 2024',
          data: [16, 20, 30, 32, 19, 27],
          fill: true,
          backgroundColor: 'rgba(30, 30, 30, 0.2)',
          borderColor: '#1E1E1E',
          pointBackgroundColor: '#1E1E1E',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#1E1E1E'
        }]
      },
      options: {
        responsive: true,
        devicePixelRatio: 2,
        aspectRatio: 1,
        scales: {
          r: {
            min: 10,
            max: 35,
          },
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