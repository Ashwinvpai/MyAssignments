

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


//Functions

function Myfunc2(p1,p2)
{
    var sum1 = p1 + p2;
    console.log("The sum of parameters "+p1+" and "+p2+" with sum "+sum1);
    console.log(`The sum of parameters ${p1} and ${p2} with sum ${sum1}`);
    return sum1;
}
var result = Myfunc2(10,20);
console.log(`${result}`);



result = Myfunc2(10.5,10.5);
result = Myfunc2(true,25);
result = Myfunc2("hello","world");
result = Myfunc2(30,"Javascript");
result = Myfunc2("Hi",false);
result = Myfunc2(30);
result = Myfunc2(30,20,1,2,3,4,5);


function Myfunc3(...p1)
{
 var i,sum=0;
 for(i=0;i<p1.length;i++)
 {
     sum+=p1[i];
 }
  console.log("No of params",p1);
  console.log("Sum",sum);
}

Myfunc3(10,20);
Myfunc3(10);
Myfunc3(10,"Ashwin");
Myfunc3(1,2,3,4,5,6,7,8,9);
Myfunc3("Hello","World","This","is","a","Javascript","file");

//Anonymous Function

(function Myfunc4(p1)
{
    console.log(p1 * p1);

})(20);

//Anonymous Function without a name 

var f1 = function (p2)
{
    return p2.substr(3,5);
}
console.log("Function F1 contains",f1);
var result = f1("Good morning");
console.log("Value of result is ",result);

function Myfunc5(arr1)
{
 arr2=[];
 for(i=0;i<arr1.length;i++)
 {
     arr2[i]= arr1[i]* arr1[i];

 }
 return arr2;
}

var sourcearray = [10,20,30,40,50];
result = Myfunc5(sourcearray);

//Map Function
result = sourcearray.map(function (item){
    return item*item;
});

console.log(sourcearray);
console.log(result);

//Find Function
var src =[20,40,80,100,120];
result = src.find(function (item){
    if(item == 80)
    return true;
});

console.log(result);

//Filter Function
result = src.filter(function (item){
    if(item > 80)
    return true;
});
console.log(result);

//Index Position
var pos = src.findIndex(function (item){
    if(item == 40)
    return true;
});

console.log(pos);

var vegetables = ["Tomato","Beans","Carrots","Potato","Onions"];
var result = vegetables.push("yams");
console.log(vegetables);
result = vegetables.pop();
console.log(vegetables);

result = vegetables.slice(2,5);
console.log(result);
result = vegetables.sort();
console.log(result);
result = vegetables.reverse();
console.log(result);
result = vegetables.toString(",");
console.log(result);
result = vegetables.shift();
console.log(result);


