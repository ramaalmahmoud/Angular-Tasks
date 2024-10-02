import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsicriptionComponent } from './subsicription.component';

describe('SubsicriptionComponent', () => {
  let component: SubsicriptionComponent;
  let fixture: ComponentFixture<SubsicriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsicriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsicriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
