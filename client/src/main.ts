import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()), // Dodaj withFetch()
    provideRouter([]),
  ]
}).catch(err => console.error(err));
