import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

/**
 * Expansion Panel サンプル。
 */
@Component({
  selector: 'app-expansion-panel-sample',
  imports: [
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './expansion-panel-sample.component.html',
  styleUrl: './expansion-panel-sample.component.css'
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
