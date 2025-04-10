import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscmapComponent } from './escmap.component';

describe('EscmapComponent', () => {
  let component: EscmapComponent;
  let fixture: ComponentFixture<EscmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
