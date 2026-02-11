import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() onClick!: () => void;
  @Input() disabled: boolean = false;

  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
