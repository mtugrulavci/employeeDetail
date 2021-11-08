import { LightningElement,track } from 'lwc';

export default class EmployeeDetail extends LightningElement {
@track name;
@track salary;
@track age;
    nameHandler(event){
    this.name = event.target.value;
}
ageHandler(event){
    this.age = event.target.value;
}
salaryHandler(event){
    this.salary = event.target.value;
}
}