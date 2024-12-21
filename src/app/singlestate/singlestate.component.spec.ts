import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestateComponent } from './singlestate.component';

describe('SinglestateComponent', () => {
  let component: SinglestateComponent;
  let fixture: ComponentFixture<SinglestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglestateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
