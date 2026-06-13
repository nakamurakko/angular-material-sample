import { Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

/**
 * Badge サンプル。
 */
@Component({
  selector: 'app-badge-sample',
  imports: [
    MatBadgeModule,
    MatButtonModule
  ],
  templateUrl: './badge-sample.component.html',
  styleUrl: './badge-sample.component.css',
})
export class BadgeSampleComponent {

  public clickCount = signal<number>(0);

  /**
   * ボタンをクリックしたらカウントアップする。
   */
  public onClick(): void {
    this.clickCount.update(value => value + 1);
  }

}
