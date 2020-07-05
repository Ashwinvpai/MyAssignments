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
//reference
var books ={bookid:101,bookname:"Harry potter"};
var books1 = books;
console.log("Books details ",books);
books1.bookid = 999;
console.log("Books1 details ",books1);
console.log("Books details ",books);

//Shallow copy 
var books1copy =Object.assign({},books);
books1copy.bookid=90001;
console.log("Books details ",books);
console.log("books1copy details ",books1copy);

//Function
function Myfunc1(p1,p2)
{
var i,sum = 0;
for(i=0;i < Myfunc1.arguments.length;i++)
{
    sum+=Myfunc1.arguments[i];
}
console.log("Value of Arguements",Myfunc1.arguments);
console.log("VAlue of Sum ",sum);
};
Myfunc1(1,2,3,4,5,6,7);
Myfunc1(12)
Myfunc1(1,"Hi");
Myfunc1("Hello ","World");
Myfunc1(true,1);
Myfunc1("Javascript",true);

//Array Splice

var fruits = ["apples","bananas","mangoes"];
fruits.splice(0,1,"guavas");
console.log(fruits);
fruits.splice(2,2,"Oranges",1,2,3,4,5,6,7);
console.log(fruits);