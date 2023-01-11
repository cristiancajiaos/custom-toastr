import { ToastrService } from 'ngx-toastr';
import { CustomToastrService } from './../services/custom-toastr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private customToastrService: CustomToastrService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  public onSuccess(): void {
    this.customToastrService.successToastr('Success message!');
  }

  public onWarning(): void {
    this.customToastrService.warningToastr('Caution! Warning message!');
  }

  public onError(): void {
    this.customToastrService.errorToastr('Error! This is an error message!');
  }

}
