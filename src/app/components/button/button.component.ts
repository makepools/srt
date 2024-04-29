import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'srt-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  disabled: boolean;
}
