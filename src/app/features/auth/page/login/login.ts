import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { LoginForm } from '../../component/login-form/login-form';
import { InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login implements OnInit {
  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private router: Router
  ) {}
 
  ngOnInit() {
    // Lắng nghe khi quá trình login hoàn tất
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.checkAndRedirect();
      });
  }

  checkAndRedirect() {
    const activeAccount = this.authService.instance.getActiveAccount();
    if (activeAccount) {
      this.router.navigate(['/dashboard']);
    }
  }
}
