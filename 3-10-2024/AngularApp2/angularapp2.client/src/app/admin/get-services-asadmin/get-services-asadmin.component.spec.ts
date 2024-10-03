import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServicesASAdminComponent } from './get-services-asadmin.component';

describe('GetServicesASAdminComponent', () => {
  let component: GetServicesASAdminComponent;
  let fixture: ComponentFixture<GetServicesASAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetServicesASAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetServicesASAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
