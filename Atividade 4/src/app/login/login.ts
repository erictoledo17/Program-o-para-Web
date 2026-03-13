import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  public alerta: string = "";

  public entrar() {
    this.alerta = "Login realizado com sucesso!";
  }

}