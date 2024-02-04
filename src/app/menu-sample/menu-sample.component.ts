import { Component } from '@angular/core';

/**
 * Menu サンプル。
 */
@Component({
  selector: 'app-menu-sample',
  templateUrl: './menu-sample.component.html',
  styleUrls: ['./menu-sample.component.css']
})
export class MenuSampleComponent {

  public selectedValue: string = '';

  /**
   * クリック処理。
   *
   * @param e イベントデータ。
   * @param value クリックしたボタンを認識する値。
   */
  public onClick(e: MouseEvent, value: string): void {
    this.selectedValue = value + ' をクリック';
  }
}
