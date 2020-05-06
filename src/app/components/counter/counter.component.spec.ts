import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be count 0 after create', () => {
    expect(fixture.debugElement.nativeElement.querySelector('span').textContent).toBe('Count: 0');
  });

  it('should change count after click increment', () => {
    const incrementButton = fixture.debugElement.query(By.css('#increment')).nativeElement;
    incrementButton.click();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toBe('Count: 1');
  });
});
