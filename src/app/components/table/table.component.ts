import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Speaker } from '../../speakers/speaker.model';
import { DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'srt-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, DatePipe, DecimalPipe, MatProgressSpinnerModule],
})
export class TableComponent {
  @Input()
  data: Speaker[];

  @Input()
  loading: boolean;
}
