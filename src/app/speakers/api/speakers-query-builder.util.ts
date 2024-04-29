import { HttpParams } from '@angular/common/http';
import { SpeakersQuery } from '../speaker.model';

export const queryBuilder = (data: SpeakersQuery) => {
  const queryTokens = {
    page: data.pageIndex,
    results: 20,
    seed: 'srt',
  };

  return new HttpParams().appendAll(queryTokens);
};
