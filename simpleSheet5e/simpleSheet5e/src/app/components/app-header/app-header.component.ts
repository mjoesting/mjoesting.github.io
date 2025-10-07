import { Component, Input } from '@angular/core';
import { SimpleSheetService } from '../../services/service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() isUpdated!: boolean | null;
  constructor(private simpleSheetService: SimpleSheetService) {}

  handleSave() {
    this.simpleSheetService.saveToStorage();
  }
}
