import { comparaValidator } from './../validators/compara-validator';
import { CpfValidator } from './../validators/cpf-validator';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})


export class CadastroPage  {

  formCadastro: FormGroup;

  mensagens = {
    tel_celular: [
      { tipo: 'required', mensagem: 'O campo telefone é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O telefone deve ter pelo menos 11 caracteres.' },
    ],
    cep: [
      { tipo: 'required', mensagem: 'O campo cep é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O telefone deve ter pelo menos 8 caracteres.' },
    ],
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    estado: [
      { tipo: 'required', mensagem: 'O campo estado é obrigatório.' },
      { tipo: 'minlength', mensagem: 'deve ter um estado selecionado.' },
    ],
    municipio: [
      { tipo: 'required', mensagem: 'O campo Município é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    bairro: [
      { tipo: 'required', mensagem: 'O campo Bairro é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    logradouro: [
      { tipo: 'required', mensagem: 'O campo logradouro é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    numero: [
      { tipo: 'required', mensagem: 'O campo numero é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    complemento: [
      { tipo: 'required', mensagem: 'O campo complemento é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    nome_mae: [
      { tipo: 'required', mensagem: 'O campo Nome da Mãe é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha.' },
    ],
  };

  constructor(private ApiService: ApiService, private formBuilder: FormBuilder) { 
    this.formCadastro = this.formBuilder.group({
      tel_celular: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      cep: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      municipio: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      bairro: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      estado: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      logradouro: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      numero: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      complemento: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      nome_mae: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmaSenha: ['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    }, 
    {
      Validator: comparaValidator('senha', 'confirmaSenha')
    });
    this.createData();
    // this.deleteData();
  }

  ngOnInit() {
  }

  createData(){
    const data: any = {
      title: 'jacy',
      body: 'teste',
      userId: '10'
    };
    this.ApiService.createData(data).subscribe(data => {
      console.log(data);
    })
  }

  SalvarCadastro() {
    console.log('Formulario: ', this.formCadastro.valid);
  }

}
