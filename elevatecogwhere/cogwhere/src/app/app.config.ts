
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const appConfig = {
  providers: [
    provideRouter([]),
    provideAnimations(),
    importProvidersFrom(
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatProgressBarModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule
    )
  ]
};
