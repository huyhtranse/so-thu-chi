import { Injectable } from "@angular/core";
import { of, delay } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DashboardService {

  getData() {
    return of([
      { symbol: 'BTC', price: 60000 },
      { symbol: 'ETH', price: 3000 }
    ]).pipe(delay(500));
  }

}