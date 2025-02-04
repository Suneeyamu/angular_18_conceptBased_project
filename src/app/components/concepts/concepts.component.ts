import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';// to use ngModel for two-way data binding
// here @component is a decorator, it'll link the file which are having by a component, means htm,css,

@Component({
  selector: 'app-concepts',
  imports: [FormsModule],
  templateUrl: './concepts.component.html',
  styleUrl: './concepts.component.css'
})
export class ConceptsComponent {
// variable declaration : string, number, boolean, date, object, array, null, undefined
// we can defined variables in 2 ways
fristName: string = "Suneeyamu"; //1st way : this will lead our variable as strongly typed variable
fristNmaeWay2 = "Suneeyamu"; //2nd way
age : number = 25;
married : boolean = false;
dateOfBirthDay : Date = new Date(); //here D is capital in Date datatype
selectedCity : string =''; //for two way data binding 

// while working in company projects we have to maintain structure like top of the page Variable declerations, constructors,ngOnint and finally functions and methods


showWelcomeAlert() {
alert("welcome to HYD")
} // function without parameters

showMessage(message : string){
alert(message)
} // function with parameter
}
