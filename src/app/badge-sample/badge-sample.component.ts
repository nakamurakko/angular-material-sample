import { Component } from '@angular/core';

/**
 * Badge サンプル。
 */
@Component({
  selector: 'app-badge-sample',
  templateUrl: './badge-sample.component.html',
  styleUrls: ['./badge-sample.component.css']
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
