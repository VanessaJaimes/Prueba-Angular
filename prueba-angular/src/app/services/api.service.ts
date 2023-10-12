import { Injectable } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { ListapostsI } from '../modelos/listaposts'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostI } from '../modelos/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  putPost(form: PostI) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllPosts(post: number): Observable<ListapostsI[]> {
    let direccion = this.apiUrl + "/posts";
    return this.http.get<ListapostsI[]>(direccion);
  }
  getDatos() {
    return this.http.get(`${this.apiUrl}/posts`);
  }
  postPost(form: PostI): any {
    let direccion = this.apiUrl + "posts";
    return this.http.post(direccion, form);
  }

}
