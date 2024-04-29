import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  SrtStatus,
  loadSpeakers,
  speakersSelector,
  speakersStatusSelector,
} from './store';
import { AsyncPipe, NgIf } from '@angular/common';
import { map, tap } from 'rxjs';
import { TableComponent } from '../components/table/table.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  templateUrl: './speakers-container.component.html',
  styleUrl: './speakers-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, AsyncPipe, TableComponent],
})
export class SpeakersContainerComponent {
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

  constructor(private store: Store) {}
}
