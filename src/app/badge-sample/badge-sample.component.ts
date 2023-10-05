import { Component, OnInit } from '@angular/core';

/**
 * Badge サンプル。
 */
@Component({
  selector: 'app-badge-sample',
  templateUrl: './badge-sample.component.html',
  styleUrls: ['./badge-sample.component.css']
})
export class BadgeSampleComponent implements OnInit {
  public clickCount: number = 0;

  public ngOnInit(): void {
  }

  /**
   * ボタンをクリックしたらカウントアップする。
   */
  public onClick(): void {
    this.clickCount++;
  }
}
