import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbilitiesComponent } from './section-abilities.component';

describe('SectionAbilitiesComponent', () => {
  let component: SectionAbilitiesComponent;
  let fixture: ComponentFixture<SectionAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAbilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
