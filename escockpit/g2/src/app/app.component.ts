import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g2';

  escalationData = [
    {
      company: 'Chakra Soft UI Version',
      logo: 'c.png',
      members: ['assets/user1.jpg', 'assets/user2.jpg', 'assets/user3.jpg'],
      caseStatus: 'Not set',
      causeOfDelay: 60,
    },
    {
      company: 'Add Progress Track',
      logo: 'p.png',
      members: ['assets/user1.jpg', 'assets/user2.jpg'],
      caseStatus: 'Not set',
      causeOfDelay: 10,
    },
    {
      company: 'Fix Platform Errors',
      logo: 'f.png',
      members: ['assets/user3.jpg', 'assets/user4.jpg'],
      caseStatus: 'Not set',
      causeOfDelay: 100,
    },
    {
      company: 'Launch our Mobile App',
      logo: 'l.png',
      members: ['assets/user5.jpg', 'assets/user6.jpg'],
      caseStatus: 'Completed',
      causeOfDelay: 100,
    },
    {
      company: 'Add the New Pricing Page',
      logo: 'a.png',
      members: ['assets/user7.jpg', 'assets/user8.jpg'],
      caseStatus: 'Not set',
      causeOfDelay: 25,
    },
    {
      company: 'Redesign New Online Shop',
      logo: 'r.png',
      members: ['assets/user9.jpg'],
      caseStatus: 'Not set',
      causeOfDelay: 40,
    },
  ];

  timelineData = [
    {
      icon: '🔔',
      title: '$2400, Design changes',
      date: '22 DEC 7:20 PM',
    },
    {
      icon: '📄',
      title: 'New order #4219423',
      date: '21 DEC 11:21 PM',
    },
    {
      icon: '🛒',
      title: 'Server Payments for April',
      date: '21 DEC 9:28 PM',
    },
    {
      icon: '💳',
      title: 'New card added for order #3210145',
      date: '20 DEC 3:52 PM',
    },
    {
      icon: '📦',
      title: 'Unlock packages for Development',
      date: '19 DEC 11:35 PM',
    },
    {
      icon: '🎨',
      title: 'New order #9851258',
      date: '18 DEC 4:41 PM',
    },
  ];

  escalationCases = [
    { slNo: '01.', name: 'Handover Compliance', cases: 520, mom: '+5%' },
    { slNo: '02.', name: 'Timely Resolution', cases: 480, mom: '+10%' },
    { slNo: '03.', name: 'Commitment Adherence', cases: 350, mom: '-3%' },
    { slNo: '04.', name: 'Delay From PE team', cases: 940, mom: '+2%' },
    { slNo: '05.', name: 'Delay From TSG', cases: 670, mom: '-12%' },
  ];

  getMoMClass(mom: string): string {
    return mom.startsWith('+') ? 'positive' : 'negative';
  }

  siteDetails = [
    { site: 'Horizon UI PRO', status: 'Green', activeCases: 700, escalations: 70 },
    { site: 'Horizon UI Free', status: 'Red', activeCases: 500, escalations: 30 },
    { site: 'Marketplace', status: 'Amber', activeCases: 800, escalations: 90 },
    { site: 'Weekly Updates', status: 'Green', activeCases: 900, escalations: 40 },
  ];

  getStatusClass(status: string): string {
    if (status === 'Green') return 'status-green';
    if (status === 'Red') return 'status-red';
    if (status === 'Amber') return 'status-amber';
    return '';
  }

  tableData = [
    { site: 'Horizon UI PRO', status: 'Green', activeCases: 700, inflightSignal: 70 },
    { site: 'Horizon UI Free', status: 'Red', activeCases: 500, inflightSignal: 30 },
    { site: 'Marketplace', status: 'Amber', activeCases: 800, inflightSignal: 90 },
    { site: 'Weekly Updates', status: 'Green', activeCases: 900, inflightSignal: 40 },
  ];


}
