import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as Constants from '../../constants';
import { SavingThrow, SectionSavingThrows, SectionSavingThrowsFormFields } from '../../models';

@Component({
  selector: 'section-saving-throws',
  imports: [],
  templateUrl: './section-saving-throws.component.html',
  styleUrl: './section-saving-throws.component.scss'
})
export class SectionSavingThrowsComponent implements OnInit {
  @Input() data!: SectionSavingThrows;
  @Input() form!: FormGroup<SectionSavingThrowsFormFields>;
  proficiencies = Object.keys(Constants.Proficiencies);
  savingThrows: SavingThrow[] = [];
  
    constructor(private changeDetectorRef: ChangeDetectorRef) {}
  
    ngOnInit() {
      Object.keys(this.data).map((key: string) => {
        this.savingThrows.push(this.data[key] as SavingThrow);
      });
      this.changeDetectorRef.detectChanges();
    }
}
