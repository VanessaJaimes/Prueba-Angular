import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostI } from 'src/app/modelos/post.interface';
import { ApiService } from 'src/app/services/api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private activerouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void{
    let postid = this.activerouter.snapshot.queryParamMap.get('id');
    
    console.log(postid);

  }
  datosPost!: PostI;
  editarForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    id: new FormControl('')
  });



  salir(){
    this.router.navigate(['table']);
  }

}
