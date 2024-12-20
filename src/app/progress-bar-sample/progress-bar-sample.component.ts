import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SampleService } from '../services/sample.service';

/**
 * Progress bar サンプル。
 */
@Component({
  selector: 'app-progress-bar-sample',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  templateUrl: './progress-bar-sample.component.html',
  styleUrl: './progress-bar-sample.component.css'
})
export class ProgressBarSampleComponent {
  /** 処理中かどうか。 */
  public isProcessing: boolean = false;

  /** 遅延させる秒数。 */
  public delaySecond: number = 5;

  /**
   * コンストラクター。
   *
   * @param sampleService サンプルサービス。
   */
  public constructor(private sampleService: SampleService) {
  }

  /**
   * onClick
   */
  public onClick(): void {
    this.isProcessing = true;
    this.sampleService.delayBy(this.delaySecond)
      .subscribe(() => {
        this.isProcessing = false;
      });
  }

}
