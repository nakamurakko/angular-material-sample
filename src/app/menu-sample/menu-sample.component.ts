import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

/**
 * Menu サンプル。
 */
@Component({
  selector: 'app-menu-sample',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  templateUrl: './menu-sample.component.html',
  styleUrl: './menu-sample.component.css',
})
export class MenuSampleComponent {

  public selectedValue = signal<string>('');

  /**
   * クリック処理。
   *
   * @param e イベントデータ。
   * @param value クリックしたボタンを認識する値。
   */
  public onClick(e: MouseEvent, value: string): void {
    this.selectedValue.set(value + ' をクリック');
  }

}
