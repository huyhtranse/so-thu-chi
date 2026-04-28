import { Component } from '@angular/core';
import { LoginForm } from '../../component/login-form/login-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
