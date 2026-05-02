import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private msalService: MsalService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.msalService.instance.initialize();

    this.msalService.handleRedirectObservable()
      .subscribe((response) => {
        if (response?.account) {
          this.msalService.instance.setActiveAccount(
            response.account
          );
          this.router.navigate(['/dashboard']);
        }
      });

    const account = this.msalService.instance.getActiveAccount();

    if (account) {
      this.router.navigate(['/dashboard']);
    }
  }
}
