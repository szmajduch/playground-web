import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { IsVisible } from '../is-visible.directive';
import { IconsComponent } from '../icons/icons.component';
import { ContentComponent } from '../content/content.component';
import { VisibleDirective } from '../visible-directive.directive';
import { INavigationContext } from './navigation-bar-utils';
import { NgFor, NgClass } from '@angular/common';
import { AboutComponent } from '../about/about.component';
@Component({
    selector: 'app-nav-bar',
    imports: [
        IconsComponent,
        ContentComponent,
        VisibleDirective,
        NgFor,
        NgClass,
        AboutComponent,
    ],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @ViewChild('nat') navBar!: ElementRef;
  contexts: INavigationContext[] = [
    {
      index: 0,
      iconName: 'bi bi-cloud-sun', // Bootstrap icon for weather
      name: 'Weather App',
      componentName: 'weatherComponent',
      description:
        'A simple application to check the current weather, forecasts, and temperature trends based on user location.',
    },
    {
      index: 1,
      iconName: 'bi bi-currency-bitcoin', // Icon for cryptocurrency
      name: 'Trade tracker',
      componentName: 'tradeComponent',
      description:
        'Track real-time stock prices, market trends, and investment insights for better decision-making.',
    },
    {
      index: 2,
      iconName: 'bi bi-tools', // Icon for CI/CD tools
      name: 'CI/CD Solutions',
      componentName: 'CICDComponent',
      description:
        'Automate your software development pipeline with CI/CD solutions, ensuring faster and more reliable deployments.',
    },
    {
      index: 3,
      iconName: 'bi bi-laptop', // Icon for websites
      name: 'Mock Websites',
      componentName: 'mockComponent',
      description:
        'Generate and test mock websites for design and development purposes, including UI/UX prototypes.',
    },
    {
      index: 4,
      iconName: 'bi bi-journal-text', // Icon for blogs
      name: 'Blog',
      componentName: 'blogComponent',
      description:
        'Create and manage blog posts, share insights, and engage with your audience through a content-rich platform.',
    },
  ];

  baseClass = 'et-hero-tabs-container';
  spanClass: { [key: string]: string } = {
    'background-color': 'lightblue',
    width: '0px',
  };

  navClass = this.baseClass;
  navItemWidth: number = 0;
  index: number = 0;
  //componentName: HTMLElement
  onVisibilityChange(componentIndex: number, isVisible: boolean) {
    if (isVisible) {
      this.index = componentIndex;
      // Access the element's width after the view is initialized
      this.updateSpanWidth();
    }
  }

  onVisibilityChangeToTrue(isVisible: boolean) {
    if (isVisible) {
      this.navClass = `${this.baseClass}`;
      this.spanClass = {
        ...this.spanClass,
        width: `0px`,
      };
    } else {
      this.navClass = `${this.baseClass}--top`;
      this.navItemWidth = 0;
    }
  }

  // Listen for window resize events to update the width dynamically
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSpanWidth();
  }
  updateSpanWidth() {
    if (this.navBar) {
      this.navItemWidth = this.navBar.nativeElement.offsetWidth / 5;
      // this.spanClass['width']=this.navItemWidth.toString()+'px';
      let postion = this.navItemWidth * this.index;
      this.spanClass = {
        width: `${this.navItemWidth}px`,
        left: `${postion}px`,
      };
      // this.changeDetectorRefs.detectChanges();
    }
  }
}
