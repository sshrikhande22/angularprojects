
import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { MissionsComponent } from './components/missions/missions.component';
import { CircularChartComponent } from './components/circular-chart/circular-chart.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    PerformanceComponent,
    MissionsComponent,
    CircularChartComponent,
    LeaderboardComponent
  ],
  template: './app.component.html',
  styles: './app.component.css'
})
export class AppComponent {}
