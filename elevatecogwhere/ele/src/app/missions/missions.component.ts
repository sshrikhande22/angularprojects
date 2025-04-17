import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatIconModule } from '@angular/material/icon'
import { Chart, registerables } from 'chart.js/auto';
import ChartDataLabels  from 'chartjs-plugin-datalabels'; 
import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [ CommonModule, MatIconModule, TopbarComponent, SidebarComponent],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css'
})
export class MissionsComponent implements AfterViewInit{

  training_statistics = [
    {
      title: "Total Points",
      value: "1500",
      progress: 45,
    },
    {
      title: "Time Spent this Week",
      value: "04h 32m",
      extra: "+2h 14m last week",
    },
    {
      title: "Current Skill Level",
      value: "07",
      badge: "Advanced",
    },
    {
      title: "Leaderboard Rank",
      value: "#14",
      badge: "Top 10%",
    },
    {
      title: "Turbo Quizes Attempted",
      value: "07",
      badge: "Advanced",
    },
    {
      title: "Completion Status",
      value: "75%",
      progress: 75,
    },

  ];
  ngAfterViewInit() {
    this.createChart2();
  }

  createChart2() {
    const ctx = document.getElementById('progressChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Courses Completed', 'Remaining'],
        datasets: [{
          data: [20, 80],
          backgroundColor: ['#0A3D5E', '#3498DB'],
          borderWidth: 5,
        }]
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: false },
          datalabels: { 
            color: '#fff',
            font: { size: 16, weight: 'bold' },
            formatter: (value: number) => `${value}%` 
          }
        },
      },
      plugins: [ChartDataLabels] 
    });
  }
}
