import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSpeakers, speakersSelector } from './store';
import { AsyncPipe, NgIf } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  templateUrl: './speakers-container.component.html',
  styleUrl: './speakers-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, AsyncPipe],
})
export class SpeakersContainerComponent {
  readonly speaker$ = this.store.select(speakersSelector).pipe(
    tap((speakers) => {
      if (speakers.length === 0) {
        this.store.dispatch(loadSpeakers({ page: 1 }));
      }
    })
  );

  constructor(private store: Store) {}
}
