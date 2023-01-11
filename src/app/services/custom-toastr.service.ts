import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(
    private toastrService: ToastrService
  ) { }

  public successToastr(text: string): void {
    this.toastrService.success(text, 'Success');
  }

  public warningToastr(text: string): void {
    this.toastrService.warning(text, 'Warning');
  }

  public errorToastr(text: string): void {
    this.toastrService.error(text, 'Error');
  }
}
