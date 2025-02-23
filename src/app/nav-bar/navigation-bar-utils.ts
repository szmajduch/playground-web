import { ElementRef } from '@angular/core';

export interface INavigationContext {
  index: number;
  iconName?: string;
  name: string;
  componentName: string;
  description?: string;
}
