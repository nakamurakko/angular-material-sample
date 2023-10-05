import { Component, OnInit } from '@angular/core';

import { SampleService } from '../services/sample.service';

/**
 * Progress bar サンプル。
 */
@Component({
  selector: 'app-progress-bar-sample',
  templateUrl: './progress-bar-sample.component.html',
  styleUrls: ['./progress-bar-sample.component.css']
})
export class ProgressBarSampleComponent implements OnInit {

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

  public ngOnInit(): void {
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
