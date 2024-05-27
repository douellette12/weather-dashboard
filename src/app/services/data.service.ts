import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public key = '8f24f2dc6b41ebb8c0b908d2ca192bbe'

  constructor(private http: HttpClient, @Inject(String) private url: string) { }

  get(params: string){
    return this.http.get(this.url + params + '&appid=' + this.key + '&units=imperial')
  }
}
