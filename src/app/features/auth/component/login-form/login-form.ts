import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../../../shared/material-imports';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MATERIAL_IMPORTS, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm implements OnInit {
  loginForm!: FormGroup;
  isPasswordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: MsalService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginWithMicrosoft() {
    // Gọi redirect thẳng sang Microsoft
    this.authService.loginRedirect({
      scopes: ['user.read'],
      // Chỉ định rõ sau khi login xong ở Microsoft thì bay về dashboard
      redirectStartPage: '/dashboard' 
    });
  }

  onSubmit() {
    
  }
}
