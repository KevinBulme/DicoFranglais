import { Component, Injectable, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ScrollSpyDirective, ScrollSpyService} from 'ng2-scrollspy';

@Injectable()
@Component({
    selector: 'my-app',
    styleUrls: ['assets/styles/app.component.css'],
    templateUrl: 'assets/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, ScrollSpyDirective]
})

export class AppComponent implements AfterViewInit {
    name = 'DicoFranglais';
    enableConsoleOutput = true;

    constructor(public scrollSpyService: ScrollSpyService) {
        this.scrollSpyService = scrollSpyService;
    }

    ngAfterViewInit() {
        this.scrollSpyService.getObservable('window').subscribe((e: any) => {
            //console.log('ScrollSpy::window: ', e);
        });
    }

  ngOnInit() {
    if(this.enableConsoleOutput){
      console.log('Initial App State', this);  
    }
  }

  logger(message: any, ...optionnalParameters: any[]) : void{
    if(this.enableConsoleOutput){
      console.log(message, optionnalParameters);    
    }
  }
 }
