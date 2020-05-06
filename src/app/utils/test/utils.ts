import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Actions, NgxsModule, Store } from '@ngxs/store';
import snq from 'snq';
import { TestBedConfig } from './models';

const NgxsRootModule = NgxsModule.forRoot([]).ngModule;

export function injectDefaultModules(config: TestBedConfig): TestBedConfig {
  const configuration = {
    ...config,
    imports: [...(config.imports || []), HttpClientTestingModule, NgxsModule.forRoot(config.states || [])],
  };
  TestBed.configureTestingModule(configuration);

  return configuration;
}

export function extractActionsAndStore(moduleDef: TestModuleMetadata) {
  if (snq(() => moduleDef.imports.find(mod => mod.ngModule && mod.ngModule.prototype == NgxsRootModule.prototype))) {
    this.actions$ = TestBed.inject(Actions);
    this.store = TestBed.inject(Store);
  }
}

export function inject(dependencies) {
  const addToThis = (key: string, token: any) => (this[key] = TestBed.get(token));

  if (dependencies) {
    Object.entries(dependencies).forEach(([key, value]) => addToThis(key, value));
  }
}
