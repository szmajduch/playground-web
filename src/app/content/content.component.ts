import { Component, Input } from '@angular/core';
import { INavigationContext } from '../nav-bar/navigation-bar-utils';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() context!: INavigationContext;
}
