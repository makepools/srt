import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpeakersApiService } from '../api/speakers-api.service';
import {
  loadSpeakersFailure,
  loadSpeakersSuccess,
  loadSpeakers,
} from './speakers.actions';

export const loadSpeakersEffect = createEffect(
  (actions$ = inject(Actions), actorsService = inject(SpeakersApiService)) => {
    return actions$.pipe(
      ofType(loadSpeakers),
      exhaustMap(({ page }) => {
        return actorsService.getPaginated(page).pipe(
          map((response) =>
            loadSpeakersSuccess({ speakers: response.results })
          ),
          catchError((error: { message: string }) =>
            of(loadSpeakersFailure({ error: error.message }))
          )
        );
      })
    );
  },
  { functional: true }
);
