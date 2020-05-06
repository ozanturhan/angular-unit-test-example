import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-test',
  template: '<p appHighlight>Testing Directives is awesome!</p>',
})
class TestComponent {}

describe('HighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should highlight', async () => {
    fixture.nativeElement.querySelector('p').dispatchEvent(new MouseEvent('mouseover'));
    expect(fixture.nativeElement.querySelector('p').style.backgroundColor).toBe('red');

    fixture.nativeElement.querySelector('p').dispatchEvent(new MouseEvent('mouseout'));
    expect(fixture.nativeElement.querySelector('p').style.backgroundColor).toBe('transparent');
  });
});
