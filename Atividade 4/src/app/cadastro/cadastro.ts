import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  public alerta: string = "";
  public obj: Cliente = new Cliente();

  public cadastrar(){
    let json = JSON.stringify(this.obj);
    localStorage.setItem("Cadastro", json);
    this.alerta = "Cadastro realizado com sucesso!";
    this.obj = new Cliente();
  }

}