import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
// export class CadastroPage implements OnInit {

//   constructor(private ApiService: ApiService) { 
//     this.createData();
//     // this.deleteData();
//   }

//   ngOnInit() {
//   }

//   createData(){
//     const data: any = {
//       title: 'jacy',
//       body: 'teste',
//       userId: '10'
//     };
//     this.ApiService.createData(data).subscribe(data => {
//       console.log(data);
//     })
//   }

// }

export class CadastroPage  {

  constructor(private ApiService: ApiService) { 
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

}
