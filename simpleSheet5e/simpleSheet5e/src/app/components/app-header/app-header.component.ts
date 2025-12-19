import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() sheetUpdated!: boolean | null;
  constructor(private dataService: DataService) {}

  handleSave() {
    // this.dataService.saveToStorage();
  }
}
