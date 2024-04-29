import { HttpParams } from '@angular/common/http';
import { SpeakersQuery } from '../speaker.model';
import { PAGE_SIZE } from '../constants/speakers.constants';

export const queryBuilder = (data: SpeakersQuery) => {
  const queryTokens = {
    page: data.pageIndex,
    results: PAGE_SIZE,
    seed: 'srt',
  };

  return new HttpParams().appendAll(queryTokens);
};
