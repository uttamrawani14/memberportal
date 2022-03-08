import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    // this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // // Stop the foreground loading after 5s
    // setTimeout(() => {
    //   this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    // }, 5000);
  }

  name:string;

  add()
  {
    this.name="Uttam"
    localStorage.setItem("token",this.name);
  }

}
