import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Diarios {
  arquivo: string;
  texto: string;
}

@Injectable({
  providedIn: 'root',
})
export class DiarioEletronicoService {
  private url: string =
    'https://defensoria.ac.def.br/apiapp/api_diario_eletronico.php/';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get(`${this.url}`);
  }

  getAll() {
    return this.http.get<[Diarios]>(this.url);
  }
  getData() {
    return this.http.get(`${this.url}`);
  }
}
