import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PondFormComponent } from './pond-form.component';

describe('PondFormComponent', () => {
  let component: PondFormComponent;
  let fixture: ComponentFixture<PondFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PondFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PondFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
