import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-sample',
  templateUrl: './checkbox-sample.component.html',
  styleUrls: ['./checkbox-sample.component.css']
})
export class CheckboxSampleComponent implements OnInit {

  /** チェックボックスの選択値 */
  public isSunny: boolean = true;

  public ngOnInit(): void {
  }

}
