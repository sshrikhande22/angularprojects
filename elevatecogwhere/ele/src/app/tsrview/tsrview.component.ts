import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { RightflexComponent } from './rightflex/rightflex.component';
import { LeftflexComponent } from './leftflex/leftflex.component';

@Component({
  selector: 'app-tsrview',
  imports: [SidebarComponent, TopbarComponent, RightflexComponent, LeftflexComponent],
  templateUrl: './tsrview.component.html',
  styleUrl: './tsrview.component.css'
})
export class TsrviewComponent {

}
