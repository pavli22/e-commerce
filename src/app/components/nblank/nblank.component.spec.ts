import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NblankComponent } from './nblank.component';

describe('NblankComponent', () => {
  let component: NblankComponent;
  let fixture: ComponentFixture<NblankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NblankComponent]
    });
    fixture = TestBed.createComponent(NblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
