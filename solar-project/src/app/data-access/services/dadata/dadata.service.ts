import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressesGetResponseDto } from '../../dtos/api/dadata/AddressesGetResponseDto';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { AddressesGetRequestDto } from '../../dtos/api/dadata/AddressesGetRequestDto';

@Injectable({
  providedIn: 'root'
})
export class DadataService {

  requestUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'

  dadataToken = environment.dadataToken;

  constructor(
    private _http: HttpClient
  ) { }

  getSuggestedAddresses(query: AddressesGetRequestDto) : Observable<AddressesGetResponseDto>{
    return this._http.post<AddressesGetResponseDto>(this.requestUrl, query, {headers: { 'Use-Other': 'true'}})
  }
}
