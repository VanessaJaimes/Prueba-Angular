import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostI } from 'src/app/modelos/post.interface';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nuevoForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  });

  constructor(private api:ApiService, private router:Router) { }

  postForm(form:PostI){
    this.api.postPost(form).subscribe( (data: any) =>{
        console.log(data);
    })
}

  salir(){
    this.router.navigate(['table']);
  }
  
}
