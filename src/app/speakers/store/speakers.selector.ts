import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpeakersState } from './speakers.reducer';

const speakersFeature = createFeatureSelector<SpeakersState>('speakers');

export const speakersSelector = createSelector(
  speakersFeature,
  (state: SpeakersState) => state.speakers
);

export const speakersStatusSelector = createSelector(
  speakersFeature,
  (state: SpeakersState) => state.status
);

export const speakersTotalResultsSelector = createSelector(
  speakersFeature,
  (state: SpeakersState) => state.totalResults
);

export const speakersPageSelector = createSelector(
  speakersFeature,
  (state: SpeakersState) => state.page
);
