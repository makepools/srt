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
import { combineLatest, debounceTime, map, startWith, tap } from 'rxjs';
import { TableComponent } from '../components/table/table.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  templateUrl: './speakers-container.component.html',
  styleUrl: './speakers-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    AsyncPipe,
    TableComponent,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
  ],
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

  readonly form = this.fb.group({
    search: new FormControl<string>(''),
  });

  private readonly searchInput$ = this.form.controls[
    'search'
  ].valueChanges.pipe(startWith(''));

  readonly resetDisabled = toSignal(
    this.searchInput$.pipe(map((value) => value.trim() === '')),
    {
      initialValue: true,
    }
  );

  private readonly filteredResults$ = combineLatest([
    this.store.select(speakersSelector),
    this.searchInput$.pipe(debounceTime(100)),
  ]).pipe(
    map(([speakers, search]) => {
      if (speakers.length === 0) {
        this.store.dispatch(loadSpeakers({ page: 1 }));
      }
      const searchTerm = search.trim().toLocaleLowerCase();
      if (searchTerm === '') {
        return speakers;
      }

      // I'm only filtering on the emails becuase its a tech test and there has to be a limit somewhere
      return speakers.filter(
        (speaker) =>
          speaker.email.toLocaleLowerCase().indexOf(searchTerm) !== -1
      );
    })
  );

  readonly speakers = toSignal(this.filteredResults$, {
    initialValue: [],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  navigateTo(index: number) {
    this.router.navigate([`speakers/${index}`]);
  }

  changedPage(data: PageEvent) {
    this.store.dispatch(loadSpeakers({ page: data.pageIndex + 1 }));
    this.clearFilter();
  }

  clearFilter() {
    this.form.patchValue({ search: '' });
  }
}
