import { Component, Input } from '@angular/core';
import { Service } from '../../service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() isUpdated: boolean | null = false;
  constructor(private service: Service) {}
}
