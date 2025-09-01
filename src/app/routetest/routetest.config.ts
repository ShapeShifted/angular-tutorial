import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { any_name_is_okay } from './routetest.route'; // Import your routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(any_name_is_okay) // Provide the router configuration
  ]
};