import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //uRL base
  url = "http://localhost/api/php/";

  //vetor de cursos
  vetor: Curso[] | undefined;

  //Cnstrutor
  constructor(private http:HttpClientModule) { }

  //Inicializador
  ngOnInit(): void {
  
  }

  //Cadastro
  cadastro(): void{
    alert("cadastro");
  }

  //Selecao
  selecao(): void{
    alert("alterar");
  }

  //alterar
  alterar(): void{
    alert("alterar");
  }

  //remover
  remover(): void{
    alert("Remover");

  }
}
