import { Component, inject, signal } from '@angular/core';
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
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  templateUrl: './progress-bar-sample.component.html',
  styleUrl: './progress-bar-sample.component.css',
})
export class ProgressBarSampleComponent {

  private sampleService = inject(SampleService);

  /** 処理中かどうか。 */
  public isProcessing = signal<boolean>(false);

  /** 遅延させる秒数。 */
  public delaySecond: number = 5;

  /**
   * onClick
   */
  public onClick(): void {
    this.isProcessing.set(true);
    this.sampleService.delayBy(this.delaySecond)
      .subscribe(() => {
        this.isProcessing.set(false);
      });
  }

}
