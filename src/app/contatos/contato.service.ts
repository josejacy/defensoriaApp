import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface contatos {
  nome: string;
  numero: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private url: string = "https://defensoria.ac.def.br/apiapp/api_contato.php/";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get(`${this.url}`)
  }
  
  getAll() {
    return this.http.get<[contatos]>(this.url);
  }
  getData() {
    return this.http.get(`${this.url}`)
  }
}
