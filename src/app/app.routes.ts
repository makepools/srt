import { Routes } from '@angular/router';
import { ROUTE_PARAMS } from './speakers/constants/speakers.constants';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'speakers',
      },
      {
        path: 'speakers',
        data: { title: 'Speakers' },
        loadComponent: () =>
          import('./speakers/speakers-container.component').then(
            (x) => x.SpeakersContainerComponent
          ),
      },
      {
        path: `speakers/:${ROUTE_PARAMS.speakerId}`,
        loadComponent: () =>
          import('./speakers/details/speaker-details-container.component').then(
            (m) => m.SpeakerDetailsContainerComponent
          ),
      },
    ],
  },
];
