import { createAction, props } from '@ngrx/store';
import { Speaker } from '../speaker.model';

export const loadSpeakers = createAction(
  '[Speakers API] Load Speakers',
  props<{ page: number }>()
);

export const loadSpeakersSuccess = createAction(
  '[Speakers API] Load Speakers Success',
  props<{ speakers: Speaker[] }>()
);

export const loadSpeakersFailure = createAction(
  '[Speakers API] Load Speakers Failure',
  props<{ error: string }>()
);
