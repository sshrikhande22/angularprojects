import { Component, Input } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from "./topbar/topbar.component";
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  imports: [ SidebarComponent, TopbarComponent, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'cog';

  performance = [
    { name: 'CSAT', value: 48.9, target: 63, points: 13 },
    { name: 'First Contact Resolution', value: 66.7, target: 48, points: 8 },
    { name: 'Quality Monitoring', value: 60.7, target: 46, points: 4 },
    { name: 'CRM Quality', value: 40.2, target: 40, points: 2 },
    { name: 'Scheduled Adherence', value: 24.3, target: 31, points: 1 },
  ];

  missions = [
    { name: 'New Phone Launch', progress: 33, openMissions: 2 },
    { name: 'CRM Tutorial', progress: 17, openMissions: 4 },
    { name: 'First Call Resolution', progress: 3, openMissions: 1 },
    { name: 'CSAT', progress: 0, openMissions: 0 },
  ];

  @Input() title = 'Better Together';
  @Input() progress = 59.91;
  @Input() target = 100;
  @Input() daysLeft = 1;
  @Input() totalChallenges = 4;

  @Input() myRank = 4;
  @Input() totalMembers = 10;

  // Top 3 users data 
  podium = [
    { rank: 2, name: 'User B', image: 'user2.jpg' },
    { rank: 1, name: 'User A', image: 'user1.jpg' },
    { rank: 3, name: 'User C', image: 'user3.jpg' }
  ];

  @Input() badgesCount = 36;

  badges = [
    { image: 'user2.jpg', label: '4 days ago' },
    { image: 'user3.jpg', label: '3 days ago' },
    { image: 'user1.jpg', label: '2 days ago' }
    // add more as needed
  ];


}
