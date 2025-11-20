import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';  // <-- Importuj config

bootstrapApplication(App, appConfig)  // <-- Koristi appConfig
  .catch(err => console.error(err));
