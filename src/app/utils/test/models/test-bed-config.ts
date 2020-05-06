import { TestModuleMetadata } from '@angular/core/testing';

export type TestBedConfig = TestModuleMetadata &
  Partial<{
    states: any[];
    toBeInjected: { [prop: string]: any };
  }>;
