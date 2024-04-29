import { Routes } from '@angular/router';

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
    ],
  },
];
