import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from './Emp';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  
  emp!:Emp
  
 

  constructor(private http:HttpClient) { }
  getall():Observable<Emp[]> {
    return this.http.get<Emp[]>('http://localhost:8082/emp/all');
  }
  delete(i: number):Observable<Emp> {
    return this.http.delete<Emp>(`http://localhost:8082/emp/${i}`);
  }
  update(e: Emp):Observable<Emp> {
    return this.http.put<Emp>('http://localhost:8082/emp/update',e);
  }
  add(a: Emp):Observable<Emp> {
    return this.http.post<Emp>('http://localhost:8082/emp/add',a);
    
  }
}
