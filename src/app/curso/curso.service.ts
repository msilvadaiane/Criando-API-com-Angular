import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Curso } from './curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {


  //ulr
  url = "http://localhost/api/php/";

  //vetor
  vetor:Curso[];



  //Construtor


  constructor(private http: HttpClientModule) { }


//Obter todos os cursos
obterCursos():Observable<Curso[]>{
return this.http.get(this.url+"listar").pipe(
  map((res)=>{
    this.vetor = res['cursos'];
    return this.vetor;
  })
)
}

}