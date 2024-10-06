import { ElementRef } from '@angular/core';

export interface INavigationContext {
  index:number;
  name: string;
  componentName: string;
  description?: string;
  elementRef?: ElementRef;
}
