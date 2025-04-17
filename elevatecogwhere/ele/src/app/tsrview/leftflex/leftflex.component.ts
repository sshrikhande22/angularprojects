import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leftflex',
  imports: [CommonModule],
  templateUrl: './leftflex.component.html',
  styleUrl: './leftflex.component.css'
})
export class LeftflexComponent {
  performance = [
    { name: 'CES', value: 48.9, target: 63, points: 13 },
    { name: 'FMR Timeline', value: 66.7, target: 48, points: 8 },
    { name: 'SDR', value: 60.7, target: 46, points: 4 },
    { name: 'vSME Consult Rate', value: 40.2, target: 40, points: 2 },
    { name: 'Escalation Rate', value: 24.3, target: 31, points: 1 },
  ];

  missions = [
    { name: 'Total Points with Completion Status', progress: 33, openMissions: 2 },
    { name: 'TSR Completion%', progress: 17, openMissions: 4 }
  ];

}
