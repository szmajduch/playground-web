import { Component } from '@angular/core';
// import { IsVisible } from '../is-visible.directive';
import { IconsComponent } from '../icons/icons.component';
import { ContentComponent } from '../content/content.component';
import { VisibleDirective } from '../visible-directive.directive';
import { INavigationContext } from './navigation-bar-utils';
import { NgFor, NgClass } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [IconsComponent, ContentComponent, VisibleDirective, NgFor, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.less',
})
export class NavBarComponent {
  contexts: INavigationContext[] = [
    {
      name: 'WeatherApp',
      componnentName: 'weatherComponent',
      elementRef: undefined,
    },
    {
      name: 'PodcastApp',
      componnentName: 'podcastComponent',
      elementRef: undefined,
    },
    {
      name: 'Password Manager',
      componnentName: 'passwordManagerComponent',
      elementRef: undefined,
    },
    {
      name: 'Mock website',
      componnentName: 'mockComponent',
      elementRef: undefined,
    }
  ];
  baseClass="et-hero-tabs-container";

  navClass=this.baseClass;
  ngAfterViewInit() {}
 
  onVisibilityChange(componentName: string, isVisible: boolean) {
    console.log(`${componentName} is visible. ${this.navClass}`);
    if (isVisible) {
      this.navClass=this.baseClass+"--top";
      console.log(`${componentName} is visible. ${this.navClass}`);
    } else {
      this.navClass=this.baseClass;
      console.log(`${componentName} is not visible. ${this.navClass}` );
    }
  }
}
