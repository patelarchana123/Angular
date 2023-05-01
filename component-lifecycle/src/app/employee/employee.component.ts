import { Component ,Input,OnInit,OnChanges,SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() message ='';

  ngOnInit():void{
    console.log("I am from OnInit of employee.component");
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log("I am from Onchanges  of employee.component");
  }
  ngDoCheck(): void {
    console.log("I am from docheck  of employee.component");
  }
  ngAfterContentInit(): void {
    console.log("I am from aftercontenetinit  of employee.component");
  }
  ngAfterContentChecked(): void {
    console.log("I am from aftercontentchecked  of employee.component");
  }
  ngAfterViewInit(): void {
    console.log("I am from afterviewinit  of employee.component");
  }
  ngAfterViewChecked(): void {
    console.log("I am afterviewchecked  of employee.component");
  }
  ngOnDestroy(): void {
    console.log("I am from Ondestroy of employee.component");
  }
    
}
