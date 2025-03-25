import { Component, ViewChildren, ViewChild, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables, scales } from 'chart.js';
import ApexCharts from 'apexcharts';

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'vem';
  @ViewChild('chart') chartElement!: ElementRef;
  @ViewChildren('chartCanvas', { read: ElementRef }) chartCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  cards = [

    { title: 'Escalations', value: '3,298', change: 5, icon: 'O.png', data: [10, 20, 15, 25, 30, 20, 35] },
    { title: 'Resolved Cases', value: '500', change: -2, icon: 'CE.png', data: [5, 15, 10, 20, 25, 15, 30] },
    { title: 'Re-Escalations', value: '+34%', change: 3, icon: 'cs.png', data: [2, 5, 8, 4, 7, 6, 10] },
    { title: 'Monthly Trends', value: '+59%', change: 7, icon: 'SLO.png', data: [3, 6, 9, 2, 5, 11, 1] }
  ];
  ngAfterViewInit() {
    this.chartCanvases.forEach((canvas: ElementRef<HTMLCanvasElement>, index: number) => {

      this.createLineChart(canvas.nativeElement, this.cards[index].data);
    });
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          name: "Case Age",
          type: "candlestick",
          data: [
            { x: new Date("2024-03-24T00:00:00"), y: [720000, 722000, 718000, 721000] },
            { x: new Date("2024-03-24T01:00:00"), y: [721000, 724000, 719000, 723000] },
            { x: new Date("2024-03-24T02:00:00"), y: [723000, 726000, 720000, 725000] },
            { x: new Date("2024-03-24T03:00:00"), y: [725000, 728000, 722000, 726000] }
          ]
        },
        {
          name: "Escalation Age",
          type: "candlestick",
          data: [
            { x: new Date("2024-03-24T00:00:00"), y: [718000, 720000, 716000, 719000] },
            { x: new Date("2024-03-24T01:00:00"), y: [719000, 722000, 717000, 721000] },
            { x: new Date("2024-03-24T02:00:00"), y: [721000, 724000, 718000, 723000] },
            { x: new Date("2024-03-24T03:00:00"), y: [723000, 726000, 720000, 725000] }
          ]
        }
      ],
      chart: {
        type: 'candlestick',
        height: 550
      },
      title: {
        text: "Case Age vs. Escalation Age",
        align: "left"
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: ["#00BFFF", "#8A2BE2"], // Blue for Case Age, Purple for Escalation Age
            // downward: ["#00CED1", "#FF1493"] // Cyan for Case Age, Pink for Escalation Age
          }
        }
      },
      legend: {
        position: "top",
        markers: { fillColors: ["#00BFFF", "#8A2BE2"] } // Set legend markers colors
      },
      tooltip: {
        enabled: true
      }
    };
 
    const chart = new ApexCharts(this.chartElement.nativeElement, options);
    chart.render();
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


  specializations = [
    { icon: 'O.png', name: 'AI/ML', value: 721882, change: -0.0466 },
    { icon: 'CE.png', name: 'Serverless', value: 48676, change: +0.0038 },
    { icon: 'cs.png', name: 'Security', value: 22370, change: +0.0045 },
    { icon: 'SLO.png', name: 'Data Analytics', value: 5788.5, change: -0.0023 },
    { icon: 'O.png', name: 'Compute Engine', value: 1660.7, change: -0.0009 },
    { icon: 'CE.png', name: 'Lorem Ipsum', value: 50839, change: +0.0066 },
    { icon: 'cs.png', name: 'Lorem Ipsum', value: 534.68, change: +0.0847 },
    { icon: 'SLO.png', name: 'Lorem Ipsum', value: 321.14, change: -0.0047 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: -0.0107 }
  ];

  escalations = [
    { id:'01', name: 'Customer', percentage: 45,color:'#007bff' },
    { id:'02', name: 'Executive', percentage: 29, color:'#28a745' },
    { id:'03', name: 'TAM', percentage: 18, color:'#6f42c1' },
    { id:'04', name: 'CE', percentage: 25, color:'#fd7e14' }
  ];

  escalations1 = [
    { id:'01', name: 'Preventive', percentage: 45,color:'#007bff' },
    { id:'02', name: 'Non-Preventive', percentage: 29, color:'#28a745' },
    { id:'03', name: 'TAM', percentage: 18, color:'#6f42c1' },
    { id:'04', name: 'CE', percentage: 25, color:'#fd7e14' }
  ];
    
  
}

  


