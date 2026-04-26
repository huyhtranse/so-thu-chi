import { Injectable, signal, computed } from '@angular/core';
import { DashboardService } from './dashboard.service';

interface DashboardState {
  total: number;
  loading: boolean;
  data: any[];
}

@Injectable({ providedIn: 'root' })
export class DashboardStore {
    constructor(public service: DashboardService) {}

  // state gốc
  private state = signal<DashboardState>({
    total: 0,
    loading: false,
    data: []
  });

  // selectors (computed)
  total = computed(() => this.state().total);
  loading = computed(() => this.state().loading);
  data = computed(() => this.state().data);

  // actions
  setLoading(loading: boolean) {
    this.state.update(s => ({ ...s, loading }));
  }

  setData(data: any[]) {
    this.state.update(s => ({
      ...s,
      data,
      total: data.length
    }));
  }

	loadData() {
		this.setLoading(true);

		this.service.getData().subscribe(data => {
			this.setData(data);
			this.setLoading(false);
		});
	}

}