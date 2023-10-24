import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

/**
 * Expansion Panel サンプル。
 */
@Component({
  selector: 'app-expansion-panel-sample',
  templateUrl: './expansion-panel-sample.component.html',
  styleUrls: ['./expansion-panel-sample.component.css']
})
export class ExpansionPanelSampleComponent {

  @ViewChild('sampleAccordion')
  public sampleAccordion?: MatAccordion;

  /**
   * Expansion Panel を全て開く。
   */
  public openAll(): void {
    this.sampleAccordion?.openAll();
  }

  /**
   * Expansion Panel を全て閉じる。
   */
  public closeAll(): void {
    this.sampleAccordion?.closeAll();
  }

}
