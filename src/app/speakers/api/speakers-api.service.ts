import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PaginatedSpeakers } from '../speaker.model';
import { queryBuilder } from './speakers-query-builder.util';

@Injectable({
  providedIn: 'root',
})
export class SpeakersApiService {
  constructor(private http: HttpClient) {}

  getPaginated(pageIndex: number = 0): Observable<PaginatedSpeakers> {
    const params = queryBuilder({
      pageIndex: pageIndex,
    });

    return this.http
      .get<PaginatedSpeakers>(`https://randomuser.me/api/1.4/`, {
        params,
      })
      .pipe(
        tap({
          error: () =>
            console.log(
              'in reality we might show a toast here and/or send a request to our servers to log the failure'
            ),
        })
      );
  }
}
