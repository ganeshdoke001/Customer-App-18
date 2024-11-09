import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    service = new MathService();
  });

  it('should create mathservice instance', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const resiult = service.add(10, 20);
    expect(30).toEqual(resiult);
  });

  it('should substract two number', () => {
    const resiult = service.sub(20, 10);
    expect(10).toEqual(resiult);
  });
  it('should multiply two numbers', () => {
    const resiult = service.multiply(10, 20);
    expect(200).toEqual(resiult);
  });
  it('should divide two numbers', () => {
    const resiult = service.div(10, 5);
    expect(2).toEqual(resiult);
  });

  it('It should throw an error when divide by 0', () => {
    expect(() => service.div(200, 0)).toThrowError('can not divide by 0');
  });
});
