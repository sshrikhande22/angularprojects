import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Globalview1Component } from './globalview1.component';

describe('Globalview1Component', () => {
  let component: Globalview1Component;
  let fixture: ComponentFixture<Globalview1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Globalview1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Globalview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
