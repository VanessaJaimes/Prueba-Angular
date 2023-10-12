import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ListapostsI } from 'src/app/modelos/listaposts';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{

  posts:ListapostsI[] | undefined;

  constructor(private api:ApiService, private router:Router) { }
  

  ngOnInit(): void {
    this.api.getAllPosts(1).subscribe(data =>{
       this.posts = data;
    })
  }


  editarPost(Id: any){
    this.router.navigate(['editar', Id]);
  }

  nuevoPost(){
    this.router.navigate(['nuevo']);
  }
  editarPost1(){
    this.router.navigate(['editar']);
  }

}
