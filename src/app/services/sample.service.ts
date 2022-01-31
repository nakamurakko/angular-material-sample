import { delay, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

/**
 * サンプルサービス。
 */
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  public constructor() { }

  /**
   * 指定した秒数だけ遅延する。
   *
   * @param second 秒数
   */
  public delayBy(second: number): Observable<boolean> {
    return of<boolean>(true)
      .pipe(
        delay(second * 1000)
      );
  }
}
