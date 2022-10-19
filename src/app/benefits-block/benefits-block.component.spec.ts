import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsBlockComponent } from './benefits-block.component';

describe('BenefitsBlockComponent', () => {
  let component: BenefitsBlockComponent;
  let fixture: ComponentFixture<BenefitsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
