import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSavingThrowsComponent } from './section-saving-throws.component';

describe('SectionSavingThrowsComponent', () => {
  let component: SectionSavingThrowsComponent;
  let fixture: ComponentFixture<SectionSavingThrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSavingThrowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSavingThrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
