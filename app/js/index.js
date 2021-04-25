/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as Math from './math';
logTitle('javascript')
/* coding examples */
// varaiables

// var name ="Tony";
// var age = 21;
// var hasDriverLicense = true;
// var empty =undefined;

// Objects

// var person ={ 
//     name:"TonyStark",
//     age :22,
//     hasDriverLicense:"true",
//     dateofbirth:"22/2/2020",
//     address:{
//         fisrtline:"123",
//         secondline:"2352",
//         country:"india"
//     }
// };
// log(JSON.stringify(person));
// log(Object.values(person));
// log(JSON.stringify(person.address));
// log(person.name);

// Arrays
// var name="soorya";
// var names=["tony","stark","sam","helloworld"];
// log(names);
// log(names[2]);
// log(names.length);

// two differenrt ways of looping
// for( var n of names){
//     log(n)
// } 

// names.forEach(function(n, index){
//     log(index +"_"+n);
// })


// Arithmetic operators

// + - / %
// var addition = 2+2;
// var sub = 3-90;
// var div=10/5;
// var multi =3*30;
// var remainder = 5% 2;

// log(addition);
// log(sub);
// log(div);
// log(multi);
// log (remainder);


// functions

// var addition =3+2;
// log(addition)
// function addNumbers (x,y) {
// function body
// define logic
    // log(x+y);
    // log((x+y)/2);
    // var result=x+y;
    // return result;
// end of function body
// }

// addNumbers(3,2);
// var result = addNumbers(3,2);
// log(result)


// more function
// log(Object.keys({name:"Tony",age:20}));
// log(Object.values({name:"Tony",age:20}))


// looping
//  var persons =[
//      {   name:"Tony",age:23},
//      {   name:"stark",age:34 }
//  ];
// for (var i=0; i <=persons.length; i++){
//     log(persons[i].name);
//     log(persons[i].age);
//     log("____________________ ")

// }

// if statements

// var bool =true;
//  var persons =
//      {   name:"Tony",age:23},
//     //  {   name:"stark",age:17 }
 
// if (persons.age >= 18){
// log(persons.name+"he is an adult")
// }else{
//     log(persons.name+" he is not an adult")

// }

// var person ={
//     name:"Sbdf"
//     ,age:16

// }
// if(person.age>=18){
//     log(person.name+"he is  an aldult");

// } else if(person.age == 16) {
//     log(person.name+"he is going to be aldult");
// } else {
//     log(person.name+" he is not an aldult");
// }


// switch statements
// var person ={
//     name:"meena"
//     ,age:19

// }
// switch(person.age){
//     case 17:
//             log(person.name+" she is going to be aldult");
//             break;
//         case 18:
//                 log(person.name+" she is  an aldult");
//                 break;
//     default:
//         log("Fuck Off")


// }
// switch(true){
//     case (person.age==17):
//             log(person.name+" she is going to be aldult");
//             break;
//         case (person.age>=18):
//                 log(person.name+" she is  an aldult");
//                 break;
//     default:
//         log(person.name+"Fuck Off not an aldult")


// }

    // switch(age){
    //     case 17:
    //         return name+"she is going to be aldult";
    //         break;
    //     case 18:
    //         return name+"she is an adult";
    //         break;
    //     default:
    //         return name+"none of the above";
    // }


// comparison and logical operators
// log(10==10);
// log(10<10);
// log(10>10);
// log(10<=10);
// log(10>=10);
// log(10 !=10);
// log(11 != 10);


// log("Logical opertors");
// log("Logical opertors && AND OPERTOR Everything must be true");
// log(10==10 && 30==30);
// log (10==10 && 30!=30);
// log("can add multiple oprerator")
// log(10==10 && 30==30 && 20==30);
// log("Logical opertors || OR OPERTORS says only one condition to be true");

// log(10==10 || 30==20);
// log(10==20 || 30==20);

// // log (10==10 && 30!=30);
// log("Logical opertors ! not OPERTORS says true is false and false is true");
// // log(10==10); true example
// log(!(10==10));
// log(!("hello"=="helo"))

// if(!(10==10)){
//     log("executed.....");
// }

// Equality without type coercion and 3   equals sign
// zero is equal to false

// one is equal to true
// log("++++++++++++++++++++++++++++++++++++++++++++")
// log("with type coercion");
// log("++++++++++++++++++++++++++++++++++++++++++++")
// log(typeof 0+""+typeof false);
// log(0==false); 
// log(typeof "0"+""+typeof false);
// log("0"==false);
// log(typeof 1+""+typeof "1");
// log(1=="1");
// log("++++++++++++++++++++++++++++++++++++++++++++")
// log("without type coercion");
// log("++++++++++++++++++++++++++++++++++++++++++++")
// log(typeof 0+""+typeof false);
// log(0===false);
// log(typeof "0"+""+typeof false);
// log("0"===false);
// log(typeof 1+""+typeof "1");
// log(1==="1");

// // // Triple equal with not
// // != !==

// log("++++++++++++++++++++++++++++++++++++++++++++")

// log("Single vs double quotes and semi column")
// log("it works with & without semicolon")
// log("++++++++++++++++++++++++++++++++++++++++++++")

// log('Helloworld');
// log("helloworld");
// log('Helloworld')
// log("helloworld")

// log("++++++++++++++++++++++++++++++++++++++++++++");
// log("MAP|FILTER|REDUCE");
// log("++++++++++++++++++++++++++++++++++++++++++++");
// log("map functions only work with ARRAYS"); 

// var map =[1,2,3,4,5].map(function(n){    
//     return n*2;
// });
// log("[].Map");
//  log(map);
//  log("++++++++++++++++++++++++++++++++++++++++++++");

//  log("[].Filter");
//  log("Filter simply allow us filter the arrays");

//  var filter=[1,2,3,4,5,5,6,855,855,22566,841,5488,1484,848,1842,111,].filter(function(n){
//      return n%2 ==0;
//  });
// log(filter);
// log(filter.length);


 
// log("++++++++++++++++++++++++++++++++++++++++++++");
// log("[].Reduce");
// var reduce =[1,2,3,4,5].reduce(function(accumulator,current){
//     return accumulator+current;
// });
// log(reduce)




// log("++++++++++++++++++++++++++++++++++++++++++++");

// log("call backs");

// function callbackExample(name , callback){
//     log(callback(name));
// }

// callbackExample("Tony" ,function second(name){
//     return "Hello"+name;
// });

// log("easytounderstand")
 

log("++++++++++++++++++++++++++++++++++++++++++++");
log("modules of javascript");
log("named exports/imports");


log(Math.add(2,2));
log(Math.sub(2,2));
log(Math.mul(2,2));
log(Math.div(2,2));
log(math.PI);


