import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('nat') navBar!: ElementRef;

  ngDoCheck(): void {
    console.log('Change detected!');
  }

  contexts: INavigationContext[] = [
    {
      index: 0,
      name: 'WeatherApp',
      componentName: 'weatherComponent',
      description: 'Test description of weatherApp',
      elementRef: undefined,
    },
    {
      index: 1,
      name: 'PodcastApp',
      componentName: 'podcastComponent',
      description: 'Test description of podcast app',
      elementRef: undefined,
    },
    {
      index: 2,
      name: 'Password Manager',
      componentName: 'passwordManagerComponent',
      elementRef: undefined,
    },
    {
      index: 3,
      name: 'Mock website',
      componentName: 'mockComponent',
      elementRef: undefined,
    },
  ];

  baseClass = 'et-hero-tabs-container';
  spanClass: { [key: string]: string } = {
    'background-color': 'lightblue',
    width: '0px',
  };

  navClass = this.baseClass;
  navItemWidth: number = 0;
  index: number = 2;
  //componentName: HTMLElement
  onVisibilityChange(componentIndex: number, isVisible: boolean) {
    if (isVisible) {
      this.index = componentIndex;
      // Access the element's width after the view is initialized
      this.updateSpanWidth();
      console.log('index:', this.index);
    }
  }

  onVisibilityChangeToTrue(isVisible: boolean) {
    if (isVisible) {
      this.navClass = `${this.baseClass}`;
      this.spanClass = {
        ...this.spanClass,
        width: `0px`,
      };
      console.log('span', this.spanClass);
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
      this.navItemWidth = this.navBar.nativeElement.offsetWidth / 4;
      // this.spanClass['width']=this.navItemWidth.toString()+'px';
      let postion = this.navItemWidth * this.index;
      console.log('postion', postion);
      this.spanClass = {
        width: `${this.navItemWidth}px`,
        left: `${postion}px`,
      };
      // this.changeDetectorRefs.detectChanges();
    }
  }
}
