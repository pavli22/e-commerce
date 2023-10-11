import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotgetPasswordComponent } from './fotget-password.component';

describe('FotgetPasswordComponent', () => {
  let component: FotgetPasswordComponent;
  let fixture: ComponentFixture<FotgetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotgetPasswordComponent]
    });
    fixture = TestBed.createComponent(FotgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
