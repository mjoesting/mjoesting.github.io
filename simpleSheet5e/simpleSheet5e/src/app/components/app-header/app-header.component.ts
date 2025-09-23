import { Component, Input } from '@angular/core';
import { Service } from '../../service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() isUpdated: boolean | null = false;
  constructor(private service: Service) {}

  handleSave() {
    this.service.saveToStorage(this.service.mapFormDataToStoreData(this.service.store.sheet));
  }
}
