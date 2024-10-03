import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'intersection-observer'; // Polyfill will be applied automatically if needed

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
