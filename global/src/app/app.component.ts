import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables, scales } from 'chart.js';

Chart.register(...registerables);



@Component({

  selector: 'app-root',
  imports: [ CommonModule ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']

})

export class AppComponent implements AfterViewInit {

  title='esc_demo';
  //Escalation Type
  escalations = [
    { id:'01', name: 'Customer', percentage: 45,color:'#007bff' },
    { id:'02', name: 'Executive', percentage: 29, color:'#28a745' },
    { id:'03', name: 'TAM', percentage: 18, color:'#6f42c1' },
    { id:'04', name: 'CE', percentage: 25, color:'#fd7e14' }
  ];

  ngAfterViewInit(): void {

  // Target vs Actual 

  new Chart('TargetChart', {

    type: 'bar',

    data: {

      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'JUn', 'Jul'],

      datasets: [

        { label: 'Target', data: [50, 40, 30, 45, 60, 55, 53], backgroundColor: 'green' },

        { label: 'Actual', data: [60, 50, 55, 50, 70, 70, 70], backgroundColor: 'orange' }

      ]

    }

  });


    // Premium vs Non-Premium

    new Chart('premiumChart', {

      type: 'bar',

      data: {

        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

        datasets: [

          { label: 'Premium', data: [120, 150, 180, 200, 170, 220, 300], backgroundColor: '#0094ff' },

          { label: 'Non-Premium', data: [100, 130, 160, 180, 150, 190, 250], backgroundColor: '#00e095' }

        ]

      }

    });



    // Predictive vs Actual Escalation

    new Chart('predictiveChart', {

      type: 'line',

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

        datasets: [

          { label: 'Predictive', data: [50, 70, 80, 60, 90, 100, 120], borderColor: '#07e098', fill: true },

          { label: 'Actual', data: [60, 80, 75, 65, 85, 95, 110], borderColor: '#0094ff', fill: true }

        ]

      }

    });



    //Sentiment Insights

    new Chart('sentimentChart', {

      type: 'line',
      

      data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

        datasets: [

          { label: 'Neutral', data: [50, 70, 80, 60, 90, 100, 120], borderColor: '#0f8b24', tension: 0.5, pointStyle: false },

          { label: 'Anxious', data: [60, 80, 55, 85, 85, 50, 60], borderColor: '#f64e60', tension: 0.5, pointStyle: false},

          {label: 'Angry', data:    [40, 60, 35, 20, 45, 56, 85], borderColor: '#a700ff', tension: 0.5, pointStyle: false }

        ],

      }

    });



    // Inflow vs Closure

    new Chart('inflowChart', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          { label: 'Volume', 
            data: [300, 400, 350, 280, 300], 
            backgroundColor: '#0094ff',
            barPercentage:0.4
          },
          { label: 'Closed', 
            data: [200, 250, 220, 180, 190], 
            backgroundColor: '#00e095',
            barPercentage:0.4
          }
        ]     
    }, 
    options:{
      responsive:true,
      plugins:{
        legend:{
          display:true,
          position:'bottom'
        }
      },
      scales:{
        x:{
          stacked:true
        },
        y:{
          stacked:true
        }
      }
    }
  });

  }

}