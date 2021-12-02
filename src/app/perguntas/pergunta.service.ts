import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Perguntas {
  pergunta: string;
  resposta: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  private url: string =
  'https://defensoria.ac.def.br/apiapp/api_faq.php';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get(`${this.url}`);
  }

  getAll() {
    return this.http.get<[Perguntas]>(this.url);
  }
  getData() {
    return this.http.get(`${this.url}`);
  }
}
