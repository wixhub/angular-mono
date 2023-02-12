import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-mono-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() text = '';
}
