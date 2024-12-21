import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgnotfdComponent } from './pgnotfd.component';

describe('PgnotfdComponent', () => {
  let component: PgnotfdComponent;
  let fixture: ComponentFixture<PgnotfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgnotfdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgnotfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
