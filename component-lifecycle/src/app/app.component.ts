import { Component, OnInit,OnChanges,SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
   message = "Hello Archana";
  title = 'component-lifecycle';
  ngOnInit():void{
    console.log("I am from OnInit of App.component");}
    ngOnChanges(changes: SimpleChanges): void {
      console.log("I am from Onchanges  of app.component");
   }
   ngDoCheck(): void {
     console.log("I am from docheck  of app.component");
   }
   ngAfterContentInit(): void {
     console.log("I am from aftercontenetinit  of app.component");
   }
   ngAfterContentChecked(): void {
     console.log("I am from aftercontentchecked  of app.component");
   }
   ngAfterViewInit(): void {
     console.log("I am from afterviewinit  of app.component");
   }
   ngAfterViewChecked(): void {
     console.log("I am afterviewchecked  of app.component");
   }
   ngOnDestroy(): void {
     console.log("I am from Ondestroy of app.component");
   }
     
}
