import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef, Component } from '@angular/core';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { LoginFormHarness } from './login-form.harness';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let cdRef: ChangeDetectorRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    cdRef = fixture.debugElement.injector.get(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should form invalid when inputs empty', () => {
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should show mandatory warning when username dirty', fakeAsync(() => {
    component.loginForm.get('username').markAsDirty();

    cdRef.detectChanges();

    expect(fixture.debugElement.query(By.css('.error-message')).nativeElement.textContent).toEqual('Mandatory');
  }));
});

describe('test form with host component', () => {
  @Component({
    template: `
      <app-login-form></app-login-form>
    `,
  })
  class HostComponent {}

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let loader: HarnessLoader;
  let cdRef: ChangeDetectorRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent, HostComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    cdRef = fixture.debugElement.injector.get(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('should show mandatory warning when username dirty', async () => {
    const loginForm = fixture.debugElement.query(By.directive(LoginFormComponent));
    const loginFormComponent = loginForm.componentInstance as LoginFormComponent;

    loginFormComponent.loginForm.get('username').markAsDirty();

    const loginFormHarness = await loader.getHarness(LoginFormHarness);

    loginForm.injector.get(ChangeDetectorRef).detectChanges();

    expect(await loginFormHarness.getErrorMessage()).toEqual('Mandatory');
  });
});
