import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesectionComponent } from './tablesection.component';

describe('TablesectionComponent', () => {
  let component: TablesectionComponent;
  let fixture: ComponentFixture<TablesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
