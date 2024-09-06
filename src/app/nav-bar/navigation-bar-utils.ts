import { ElementRef } from '@angular/core';

export interface INavigationContext {
  name: string;
  componnentName: string;
  elementRef?: ElementRef;
}
