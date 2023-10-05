import { Component, OnInit } from '@angular/core';

/**
 * Form field サンプル。
 */
@Component({
  selector: 'app-form-field-sample',
  templateUrl: './form-field-sample.component.html',
  styleUrls: ['./form-field-sample.component.css']
})
export class FormFieldSampleComponent implements OnInit {

  public inputValue: string = 'input';
  public textAreaValue: string = 'textArea';

  public ngOnInit(): void {
  }

}
