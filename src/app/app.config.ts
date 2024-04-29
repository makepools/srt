import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { speakersReducer } from './speakers/store';
import * as speakerEffects from './speakers/store/speakers.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ speakers: speakersReducer }),
    provideEffects(speakerEffects), provideAnimationsAsync(),
  ],
};
