import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNumerosComponent } from './data-numeros.component';

describe('DataNumerosComponent', () => {
  let component: DataNumerosComponent;
  let fixture: ComponentFixture<DataNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
