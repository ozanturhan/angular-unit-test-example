import { ComponentFixture } from '@angular/core/testing';
import { TestBedCommon } from './test-bed-common';
import { HarnessLoader } from '@angular/cdk/testing';

export interface TestBedForComponent<T> extends TestBedCommon {
  fixture: ComponentFixture<T>;
  component: T;
  element?: HTMLElement;
  loader: HarnessLoader;
}
