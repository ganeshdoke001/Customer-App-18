export class ApiResponse<T> {
  private success: boolean;
  private totalRecords: number;
  private data: T;

  public constructor() {
    this.success = false;
    this.totalRecords = 0;
    this.data = <T>{};
  }

  public isSuccess(): boolean {
    return this.success;
  }

  public getTotalRecord(): number {
    return this.totalRecords;
  }
  public getData() {
    return this.data;
  }

  public setSuccess(sucess: boolean) {
    this.success = sucess;
  }

  public setTotalRecord(record: number) {
    this.totalRecords = record;
  }
  public setData(data: T) {
    return (this.data = data);
  }
}
