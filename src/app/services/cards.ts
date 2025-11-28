import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { adminSignUp, ICard } from '../model/card';



@Injectable({
  providedIn: 'root',
})

export class Cards {
  private apiUrl = environment.apiUrl
  http = inject(HttpClient)

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.apiUrl}cards`)
  }

  getCardById(id: any): Observable<ICard> {
    return this.http.get<ICard>(`${this.apiUrl}cards/${id}`)
  }

  createUser(data: adminSignUp) {
    return this.http.post<adminSignUp>(`${this.apiUrl}adminsignup`, data)
  }

  getUsers() {
    return this.http.get<adminSignUp[]>(`${this.apiUrl}adminsignup`)
  }
}
