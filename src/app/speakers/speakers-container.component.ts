import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'srt-speakers',
  standalone: true,
  templateUrl: './speakers-container.component.html',
  styleUrl: './speakers-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class SpeakersContainerComponent {}
