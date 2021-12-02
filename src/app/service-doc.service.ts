import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Documentos {
  arquivo: string;
  texto: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDocService {
  private url: string = "https://defensoria.ac.def.br/apiapp/api_doc_uteis.php/";
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    return this.http.get(`${this.url}`)
  }
  
  getAll() {
    return this.http.get<[Documentos]>(this.url);
  }
  getData() {
    return this.http.get(`${this.url}`)
  }
}
