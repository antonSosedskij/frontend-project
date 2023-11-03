import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { UserDto } from '../../dtos/api/user/UserDto';
import { UserUpdateDto } from '../../dtos/api/user/UserUpdateDto';
import { UserUpdateResponseDto } from '../../dtos/api/user/UserUpdateResponseDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.apiUrl;

  public userState$ = new BehaviorSubject<UserDto | null>(null);

  constructor(private _http: HttpClient) { }

  public getCurrentUser() : Observable<UserDto>{
    return this._http.get<UserDto>(`${this.API_URL}Users/current`)
      .pipe(
        tap(
          (response : UserDto) => {
            this.userState$.next(response)
          }
        )
      )
  }

  updateUser(request: FormData, id: string) : Observable<UserUpdateResponseDto>{
    return this._http.put<UserUpdateResponseDto>(`${this.API_URL}Users/${id}`, request)
  }
}
