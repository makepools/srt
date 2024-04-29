import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'srt-speaker-details-container',
  standalone: true,
  templateUrl: './speaker-details-container.component.html',
  styleUrl: './speaker-details-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, ButtonComponent],
})
export class SpeakerDetailsContainerComponent {
  constructor(private route: ActivatedRoute) {}
}
