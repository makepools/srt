import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListData } from './model/list-data.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'srt-list',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input()
  data: ListData[];

  @Input()
  loading: boolean;
}
