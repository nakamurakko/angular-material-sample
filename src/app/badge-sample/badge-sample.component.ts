import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

/**
 * Badge サンプル。
 */
@Component({
  selector: 'app-badge-sample',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatButtonModule
  ],
  templateUrl: './badge-sample.component.html',
  styleUrl: './badge-sample.component.css'
})
export class BadgeSampleComponent {

  public clickCount: number = 0;

  /**
   * ボタンをクリックしたらカウントアップする。
   */
  public onClick(): void {
    this.clickCount++;
  }

}
