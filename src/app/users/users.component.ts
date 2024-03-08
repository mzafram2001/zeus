import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public chartReputation: any = null;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (this.chartReputation) {
      this.chartReputation.destroy();
    }

    this.chartReputation = new Chart("reputation", {
      type: 'doughnut',
      data: {
        labels: ['Completed % to rank up', 'Remaining % to rank up'],
        datasets: [
          {
            data: [72, 28],
            borderColor: ['#F4B942', '#1E1E1E'],
            backgroundColor: ['rgba(244, 185, 66, 0.7)', 'rgba(30, 30, 30, 0.7)'],
          }
        ]
      },
      options: {
        responsive: true,
        devicePixelRatio: 2,
        aspectRatio: 1.5,
        layout: {
          padding: 20
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
