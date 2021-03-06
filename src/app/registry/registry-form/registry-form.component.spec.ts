import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryFormComponent } from './registry-form.component';

describe('RegistryComponent', () => {
  let component: RegistryFormComponent;
  let fixture: ComponentFixture<RegistryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
