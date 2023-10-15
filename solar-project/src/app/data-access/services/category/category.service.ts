import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CategoryGetResponseDto } from '../../dtos/api/CategoryGetResponseDto';
import { GetCategoryByIdDto } from '../../dtos/api/GetCategoryByIdDto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  API_URL : string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getAllCategories() : Observable<CategoryGetResponseDto[]>{
    return this._http.get<CategoryGetResponseDto[]>(`${this.API_URL}Categories`)
  }

  getCategoryById( id: string) : Observable<GetCategoryByIdDto>{
    return this._http.get<GetCategoryByIdDto>(`${this.API_URL}Categories/${id}`)
  }
}
