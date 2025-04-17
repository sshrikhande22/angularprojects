import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  user = {
    name: 'Alex Sharrow',
    role: 'GCP Tech TSR',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg' // replace with real URL when required
  };
}
