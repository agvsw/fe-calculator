import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Calculator} from '../model/calculator.model';
import {Observable} from 'rxjs';
import {CommonResponse} from '../model/commonResponse';
import {Constants} from './Constants';

@Injectable({
  providedIn: 'root'
})
export class AritchService {

  constructor(private http: HttpClient) { }

  calc(params: Calculator): Observable<CommonResponse<Calculator>> {
    return this.http.post<CommonResponse<any>>(`${Constants.API_BASE_URL}/arithmetic`, params)
  }
}
