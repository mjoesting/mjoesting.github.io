import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDefensesComponent } from './section-defenses.component';

describe('SectionDefensesComponent', () => {
  let component: SectionDefensesComponent;
  let fixture: ComponentFixture<SectionDefensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDefensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDefensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
