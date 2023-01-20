import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorWrapperComponent } from './form-error-wrapper.component';

describe('FormErrorWrapperComponent', () => {
  let component: FormErrorWrapperComponent;
  let fixture: ComponentFixture<FormErrorWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
