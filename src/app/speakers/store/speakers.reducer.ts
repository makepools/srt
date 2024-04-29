import { createReducer, on } from '@ngrx/store';
import { Speaker } from '../speaker.model';
import {
  loadSpeakersFailure,
  loadSpeakersSuccess,
  loadSpeakers,
} from './speakers.actions';

export enum SrtStatus {
  Initial = 'initial',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export interface SpeakersState {
  page: number;
  totalResults: number;
  speakers: Speaker[];
  status: SrtStatus;
  error: string;
}

export const initialState: SpeakersState = {
  page: 1,
  totalResults: 0,
  speakers: [],
  status: SrtStatus.Initial,
  error: null,
};

export const speakersReducer = createReducer(
  initialState,
  on(loadSpeakers, (state, payload) => ({
    ...state,
    page: payload.page,
    status: SrtStatus.Loading,
  })),
  on(loadSpeakersSuccess, (state, { speakers }) => {
    return {
      ...state,
      speakers,
      totalResults: 60, // normally this number would come back with the API so I'm setting it with a magic number
      status: SrtStatus.Success,
      error: null,
    };
  }),
  on(loadSpeakersFailure, (state, payload) => ({
    ...state,
    error: payload.error,
    status: SrtStatus.Error,
  }))
);
