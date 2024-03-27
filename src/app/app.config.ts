import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CarConfigService } from './services/carconfig.service';
import { CarConfigStorageService } from './services/carconfig-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), CarConfigService, CarConfigStorageService]
};