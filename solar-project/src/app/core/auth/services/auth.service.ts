import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { SignUpRequestDto } from '../dtos/sign-up-request';
import { Observable, map, switchMap, tap } from 'rxjs';
import { SignUpResponseDto } from '../dtos/sign-up-response';
import { SignInRequestDto } from '../dtos/sign-in-request';
import { SignInResponseDto } from '../dtos/sign-in-response';
import { UserService } from 'src/app/data-access/services/user/user.service';
import { UserDto } from 'src/app/data-access/dtos/api/user/UserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.apiUrl;

  constructor(
    private _http: HttpClient,
    private _userService: UserService) { }

  public isAuthenticated() : boolean{
    const token = localStorage.getItem('token');
    return !!token
  }

  public signUp(request: SignUpRequestDto): Observable<SignUpResponseDto> {
		return this._http.post<SignUpResponseDto>(`${this.API_URL}Auth/Register`, request);
	}

  public signIn(request: SignInRequestDto): Observable<UserDto> {
		return this._http
			.post<string>(`${this.API_URL}Auth/Login`,request)
        .pipe(
          tap(
            (response) => {
              localStorage.setItem('token', response);
            }
          ),
          switchMap(
            (response) => this._userService.getCurrentUser()
          ),
        )
        
  }


}