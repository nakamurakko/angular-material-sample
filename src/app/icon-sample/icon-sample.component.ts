import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * Icon サンプル。
 * マテリアル アイコンガイド https://developers.google.com/fonts/docs/material_icons?hl=ja
 * Material Symbols and Icons - Google Fonts https://fonts.google.com/icons?hl=ja
 */
@Component({
  selector: 'app-icon-sample',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './icon-sample.component.html',
  styleUrl: './icon-sample.component.css'
})
export class IconSampleComponent {

}
