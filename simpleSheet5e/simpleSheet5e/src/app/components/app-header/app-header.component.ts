import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ButtonComponent } from '../button/button.component';
import { StoreService } from '../../state/store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() sheetUpdated!: boolean | null;
  constructor(private dataService: DataService, private storeService: StoreService) {}

  handleSave() {
    this.dataService.saveToStorage(this.storeService.getCurrentStoreData());
  }
}
