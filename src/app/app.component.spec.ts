import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './components/counter/counter.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Hello World');
  });

  it('should change title when click button', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('span').textContent).toContain('Hello World');

    const button = fixture.debugElement.query(By.css('.test-button')).nativeElement;

    button.click();

    /*tick(5000);
    fixture.detectChanges();
    expect(compiled.querySelector('.content span').textContent).toContain('Unit Testing app is running!');*/

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(compiled.querySelector('span').textContent).toContain('Unit Testing');
    });
  });
});
