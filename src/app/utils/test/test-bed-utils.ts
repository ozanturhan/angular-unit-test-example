import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { extractActionsAndStore, inject, injectDefaultModules } from './utils';
import { TestBedConfig } from './models/test-bed-config';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

export namespace TestBedUtils {
  export function configure(config: TestBedConfig) {
    const configuration = injectDefaultModules(config);

    this.controller = TestBed.inject(HttpTestingController);

    extractActionsAndStore.call(this, configuration);

    inject.call(this, configuration.toBeInjected);
  }

  export function configureForComponent<T>(config: TestBedConfig) {
    const configuration = injectDefaultModules(config);
    TestBed.configureTestingModule(configuration).compileComponents();

    this.fixture = TestBed.createComponent(configuration.declarations[0]);
    this.component = this.fixture.debugElement.componentInstance;
    this.controller = TestBed.inject(HttpTestingController);
    this.loader = TestbedHarnessEnvironment.loader(this.fixture);
    this.element = this.fixture.debugElement.nativeElement;

    inject.call(this, configuration.toBeInjected);

    this.fixture.detectChanges();

    extractActionsAndStore.call(this, configuration);
  }
}
