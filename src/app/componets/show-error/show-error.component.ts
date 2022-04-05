import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {
  //Input có thể truyền vào tham số nhận được từ cha
  //Nếu không truyền thì biến của Input khai báo chính là tên đó
  //Nếu truywwfn thì có thể gán 1 tên mơis
    // @Input() message: string;  //Cách 1
    // @Input('message') mes: string; //Cách 2
    @Input() formField: any;
    @Input() key: string;

  constructor() { 
    // this.message = ''; //Cách 1
    // this.mes = ''; //Cách 2
    this.key = '';
  }

  ngOnInit(): void {
  }

}
