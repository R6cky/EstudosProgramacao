import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardsComponent } from './small-cards.component';

describe('SmallCardsComponent', () => {
  let component: SmallCardsComponent;
  let fixture: ComponentFixture<SmallCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCardsComponent]
    });
    fixture = TestBed.createComponent(SmallCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
