alert("This is my new web page");
var i = 10;
console.log("Value of i",i);
var i =[30,true,"Ashwin",12.5];
console.log("Value of Array",i);
console.log("Value of element at 1st Position",i[0]);
console.log("Value of element at 1st Position",i[1]);
console.log("Value of element at 1st Position",i[2]);
console.log("Value of element at 1st Position",i[3]);
var employee = {
    id:10,
    name:"Ashwin",
   Salary:5000,
   dept:120
    
};
console.log("VAlue of employee",employee);
console.log("Employee Id",employee.id);
console.log("Employee Name",employee.name);
console.log("Employee Salary",employee.Salary);
console.log("Employee Department",employee.dept);


console.log("Employee Details",employee);
var emp1 =employee;
delete emp1.dept;
console.log("Employee 1 details",emp1);
const  pi =3.14;
console.log("Value of pi",pi);
const emp ={
    id:101,
    name:"Steve",
    Salary: 10000

};
console.log("employee details ",emp);
emp.id=999;
console.log("Changed Employee Details ",emp);
