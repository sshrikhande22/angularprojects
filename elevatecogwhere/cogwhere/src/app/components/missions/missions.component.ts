
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule],
  template: `<p>missions works!</p>`,
  styles: [`p { padding: 10px; background: #f0f0f0; border-radius: 8px; }`]
})
export class MissionsComponent {}
