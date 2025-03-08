import { Component, Input } from '@angular/core';
import { INavigationContext } from '../nav-bar/navigation-bar-utils';
import { NgClass } from '@angular/common';
@Component({
    selector: 'app-content',
    imports: [NgClass],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() context!: INavigationContext;
}
