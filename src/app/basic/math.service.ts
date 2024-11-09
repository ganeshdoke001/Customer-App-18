import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}

  add(a: number, b: number) {
    return a + b;
  }

  sub(a: number, b: number) {
    return a - b;
  }
  multiply(a: number, b: number) {
    return a * b;
  }
  div(a: number, b: number) {
    if (b == 0) {
      throw new Error('can not divide by 0');
    }
    return a / b;
  }
}
