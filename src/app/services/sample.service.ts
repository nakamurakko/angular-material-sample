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
   * @returns 指定秒数後に true を返す。
   */
  public delayBy(second: number): Observable<boolean> {
    return of(true)
      .pipe(
        delay(second * 1000)
      );
  }
}
