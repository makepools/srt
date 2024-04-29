import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  SrtStatus,
  loadSpeakers,
  speakersSelector,
  speakersStatusSelector,
} from '../store';
import { filter, map, tap, withLatestFrom } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { ListComponent } from '../../components/list/list.component';
import { ListData } from '../../components/list/model/list-data.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PAGE_SIZE, ROUTE_PARAMS } from '../constants/speakers.constants';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'srt-speaker-details-container',
  standalone: true,
  templateUrl: './speaker-details-container.component.html',
  styleUrl: './speaker-details-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, AsyncPipe, ListComponent, RouterModule, ButtonComponent],
})
export class SpeakerDetailsContainerComponent {
  readonly loading = signal(false);

  readonly error = toSignal(
    this.store
      .select(speakersStatusSelector)
      .pipe(map((status) => status === SrtStatus.Error)),
    {
      initialValue: false,
    }
  );

  readonly speaker$ = this.store.select(speakersSelector).pipe(
    withLatestFrom(this.route.params),
    map(([speakers, params]) => {
      const id = Number(params[ROUTE_PARAMS.speakerId]);

      if (speakers.length === 0) {
        this.loading.set(true);
        const page = Math.floor((id - 1) / PAGE_SIZE) + 1;
        this.store.dispatch(loadSpeakers({ page }));
      }

      const remainder = id % PAGE_SIZE;
      const index = remainder === 0 ? 19 : remainder - 1;
      return speakers.length === 0 ? null : speakers[index];
    }),
    filter((speaker) => speaker !== null),
    tap((speaker) => {
      this.loading.set(false);
      this.speaker.set([
        {
          term: 'Name',
          description: speaker.name.first + ' ' + speaker.name.last,
        },
        {
          term: 'Age',
          description: speaker.dob.age.toString(),
        },
        { term: 'Email', description: speaker.email },
        { term: 'Gender', description: speaker.gender },
        { term: 'Phone', description: speaker.phone },
        {
          term: 'Address',
          description:
            speaker.location.street.number + ' ' + speaker.location.street.name,
        },
        { term: '', description: speaker.location.city },
        { term: '', description: speaker.location.postcode },
        { term: 'Country', description: speaker.location.country },
      ]);
    })
  );

  readonly speaker = signal<ListData[]>([]);

  constructor(private store: Store, private route: ActivatedRoute) {}
}
