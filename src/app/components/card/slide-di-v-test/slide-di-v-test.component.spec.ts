import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDiVTestComponent } from './slide-di-v-test.component';

describe('SlideDiVTestComponent', () => {
  let component: SlideDiVTestComponent;
  let fixture: ComponentFixture<SlideDiVTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideDiVTestComponent]
    });
    fixture = TestBed.createComponent(SlideDiVTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
