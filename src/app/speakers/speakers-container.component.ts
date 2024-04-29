import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  SrtStatus,
  loadSpeakers,
  speakersPageSelector,
  speakersSelector,
  speakersStatusSelector,
  speakersTotalResultsSelector,
} from './store';
import { AsyncPipe, NgIf } from '@angular/common';
import { map, tap } from 'rxjs';
import { TableComponent } from '../components/table/table.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  templateUrl: './speakers-container.component.html',
  styleUrl: './speakers-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, AsyncPipe, TableComponent, MatPaginatorModule],
})
export class SpeakersContainerComponent {
  readonly pageIndex = toSignal(
    this.store.select(speakersPageSelector).pipe(map((page) => page - 1)),
    {
      initialValue: 0,
    }
  );

  readonly totalResults = toSignal(
    this.store.select(speakersTotalResultsSelector),
    {
      initialValue: 0,
    }
  );

  readonly speaker$ = this.store.select(speakersSelector).pipe(
    tap((speakers) => {
      if (speakers.length === 0) {
        this.store.dispatch(loadSpeakers({ page: 1 }));
      }
    })
  );

  readonly speakers = toSignal(this.speaker$, {
    initialValue: [],
  });

  readonly loading = toSignal(
    this.store
      .select(speakersStatusSelector)
      .pipe(map((status) => status !== SrtStatus.Success)),
    {
      initialValue: false,
    }
  );

  readonly error = toSignal(
    this.store
      .select(speakersStatusSelector)
      .pipe(map((status) => status === SrtStatus.Error)),
    {
      initialValue: false,
    }
  );

  constructor(private store: Store) {}

  changedPage(data: PageEvent) {
    this.store.dispatch(loadSpeakers({ page: data.pageIndex + 1 }));
  }
}
