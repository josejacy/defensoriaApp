import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Noticias {
  titulo: string;
  texto: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceNoticiaService {
  private url: string = 'https://defensoria.ac.def.br/apiapp/api_noticias.php/';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get(`${this.url}/1`);
  }

  getAll() {
    return this.http.get<[Noticias]>(this.url);
  }
  getData() {
    return this.http.get(`${this.url}/1`);
  }
}
