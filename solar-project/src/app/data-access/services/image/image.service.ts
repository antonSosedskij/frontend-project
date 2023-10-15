import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  API_URL : string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getImageById(id: string) : Observable<any>{
    return this._http.get(`${this.API_URL}Images/${id}`, {responseType: 'blob'})
  }
}
