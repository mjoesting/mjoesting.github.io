import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProficienciesComponent } from './section-proficiencies.component';

describe('SectionProficienciesComponent', () => {
  let component: SectionProficienciesComponent;
  let fixture: ComponentFixture<SectionProficienciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProficienciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProficienciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
