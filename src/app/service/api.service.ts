import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Resposta {
  arquivo: string;
  texto: string;
}
export interface Documentos {
  arquivo: string;
  texto: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private url: string = "https://defensoria.ac.def.br/apiapp/api_faq.php/";
  private api: string = 'https://jsonplaceholder.typicode.com/';
  private options: any = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };
  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get(`${this.api}/1`);
  }

  getAll() {
    return this.http.get<[Resposta]>(this.api);
  }
  getData() {
    return this.http.get(`${this.api}/1`);
  }

  createData(data: any) {
    return this.http.post(
      `${this.api}posts`,
      JSON.stringify(data),
      this.options
    );
  }

  deleteData() {}
}
