import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherGithub, featherLinkedin } from '@ng-icons/feather-icons';
@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ featherGithub, featherLinkedin })],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.less',
})
export class IconsComponent {}
