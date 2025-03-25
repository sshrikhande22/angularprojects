import { Component, ViewChildren, ViewChild, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, scales } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

interface LeaderboardEntry{
  name: string;
  points: number;
  accuracy: number;
  position: number;
  imagePath:string;
  width: true;
  movement: 'up'| 'down' | 'neutral';
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent implements AfterViewInit {
  title = 'ec';
  @ViewChildren('chartCanvas', { read: ElementRef }) chartCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  //datasets
  labels:string[]=['Jan','Feb','Mar'];
  specializationData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 130 },
    { month: 'Apr', value: 220 },
    { month: 'May', value: 250 },
    { month: 'Jun', value: 200 },
    { month: 'Jul', value: 270 },
    { month: 'Aug', value: 100 },
    { month: 'Sep', value: 300 },
    { month: 'Oct', value: 320 },
    { month: 'Nov', value: 380 },
    { month: 'Dec', value: 420 }
  ];

  cards = [

    { title: 'Inflow Month to Date', data: [10, 20, 15, 25, 30, 20, 35] },
    { title: 'Closure Month to date', data: [5, 15, 10, 20, 25, 15, 30] },
    { title: 'Re-Escalations', data: [2, 5, 8, 4, 7, 6, 10] }
  ];

  //connection
  ngAfterViewInit(): void {
   const labels=this.specializationData.map(item=>item.month);
   const data=this.specializationData.map(item=>item.value);

   this.chartCanvases.forEach((canvas: ElementRef<HTMLCanvasElement>, index: number) => {

    this.createLineChart(canvas.nativeElement, this.cards[index].data);
  });
    this.createChart1('chart1', 'bar', labels, data, 'Total Escalations', '#007bff');
    this.createChart2();
    this.createChart3();
  }
  createLineChart(canvas: HTMLCanvasElement, data: number[]) {
    new Chart(canvas.getContext('2d')!, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Trend',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointStyle: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { display: false },
          y: { display: false }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
 
  createChart1(canvasId: string, type: any, labels: any, data: any, labelName: string, barColor?: string) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    const actualValues = [100, 120, 130, 220, 250, 200, 270, 100, 300, 320, 380, 420];
    const remainingValues = actualValues.map(value => 450 - value); // Light Orange (Remaining percentage)
    if (ctx) {
        new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [
                    {
                      label: "Actual",
                      data: actualValues,
                      backgroundColor: "hsl(214, 97.20%, 57.50%)", 
                      borderRadius: 50,
                      barThickness: 15,
                      barPercentage: 0.5,  
                      categoryPercentage: 0.5,
                    },
                    {
                      label: "Remaining",
                      data: remainingValues,
                      backgroundColor: "hsl(214, 91.80%, 85.70%)", // Light Orange
                      borderRadius: 8,
                      barThickness: 15,
                      barPercentage: 0.5,  
                      categoryPercentage: 0.5,
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                      grid: { display: false },
                      stacked: true
                    },
                    y: {
                        beginAtZero: true,
                        grid: { display: false },
                        
                        stacked: true
                      },
                }
              }
        });
      }
  }      
 
  createChart2() {
    const canvas = document.getElementById('chart2') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
 
    const actualValues = [74, 52, 36];
    const remainingValues = actualValues.map(value => 100 - value); // Light Orange (Remaining percentage)
 
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Customer", "Leadership", "TAM"],
        datasets: [
          {
            label: "Actual",
            data: actualValues,
            backgroundColor: "hsl(12, 93.80%, 55.70%)", // Dark Orange
            borderRadius: 8,
            barThickness: 15
          },
          {
            label: "Remaining",
            data: remainingValues,
            backgroundColor: "hsl(16, 90.50%, 79.40%)", // Light Orange
            borderRadius: 8,
            barThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            stacked: true, 
            display: false 
          },
          y: {
            stacked: true,
            grid: { display: false }
          }
        }
      }
    });
  }

  
  createChart3() {
    const canvas = document.getElementById('chart3') as HTMLCanvasElement;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    // Create gradient fill
    const actualValues = [95, 72, 49]; 
    const remainingValues = actualValues.map(value => 100 - value);
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["<24 hrs", "1-3 days", "4-7 days"],
        datasets: [
          {
            label: "Actual",
            data: actualValues,
            backgroundColor: "hsl(120, 74.10%, 37.80%)", // Dark Orange
            borderRadius: 8,
            barThickness: 15
          },
          {
            label: "Remaining",
            data: remainingValues,
            backgroundColor: "hsl(124, 73.90%, 82.00%)", // Light Orange
            borderRadius: 8,
            barThickness: 15
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            stacked: true, 
            display: false 
          },
          y: {
            stacked: true, 
            grid: { display: false }
          }
        }
      }
    });
  }
  
  leaderboard = [
    { profileImage: "pfp.png", name: "Alice", points: 120, accuracy: 90, position: 1, movement: "up", width: true},
    { profileImage: "pfp.png", name: "Bob", points: 110, accuracy: 85, position: 2, movement: "down", width: true },
    { profileImage: "pfp.png", name: "Charlie", points: 100, accuracy: 80, position: 3, movement: "up", width: true },
    { profileImage: "pfp.png", name: "Donald", points: 90, accuracy: 75, position: 4, movement: "down", width: true },
  ];
  specializationLeaderboard = [
    { name: "Houstan", points: 130, accuracy: 92, position: 1, movement: "up" },
    { name: "TestGrp", points: 125, accuracy: 89, position: 2, movement: "down" },
    { name: "Sales", points: 115, accuracy: 85, position: 3, movement: "up" },
    { name: "Technical", points: 55, accuracy: 65, position: 4, movement: "up" },
  ];
}