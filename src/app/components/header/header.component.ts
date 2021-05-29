import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, podIcon } from '@cds/core/icon';

ClarityIcons.addIcons(podIcon);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}
}
