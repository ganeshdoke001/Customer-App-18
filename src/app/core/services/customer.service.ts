import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from '../constants/app.constants';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseURL: string = APP_CONSTANTS.API_URL;

  constructor(private http: HttpClient) {}

  public save(customer: Customer): Observable<ApiResponse<Customer>> {
    return this.http.post<ApiResponse<Customer>>(`${this.baseURL}`, customer);
  }

  public update(
    id: number,
    customer: Customer
  ): Observable<ApiResponse<Customer>> {
    return this.http.put<ApiResponse<Customer>>(
      `${this.baseURL}` + '/' + id,
      customer
    );
  }
  public get(id: number): Observable<ApiResponse<Customer>> {
    return this.http.get<ApiResponse<Customer>>(`${this.baseURL}` + '/' + id);
  }
  public getAll(): Observable<ApiResponse<Customer>> {
    return this.http.get<ApiResponse<Customer>>(`${this.baseURL}`);
  }
  public delete(id: number): Observable<ApiResponse<Customer>> {
    return this.http.delete<ApiResponse<Customer>>(
      `${this.baseURL}` + '/' + id
    );
  }
}
