// let name = "yash"
// name = "ysh"
// console.log (name)
// function greet(name="guest"){
//     return(`Hello ${name}`)
// }
// console.log(greet())
// let arr1=[1,2,3,4,5]
// let arr2=[...arr1,6,7,8,9,10]
// console.log(arr2)
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hi I am ${this.name} of age ${this.age}.`
//     }
// }
// p1 = new Person(
//     "Yash", 20
// )
// console.log(p1.greet())

// //8 January

// //Imperative Programming : 
// let a=[1,2,3,4,5]
// let result=[]
// for(let i=0;i<a.length;i++){
//     result.push(a[i]*2)
// }
// console.log(result)

// // Declarative Programming : 
// let a=[1,2,3,4,5]
// let result=a.map(n=>n*2)
// console.log(result)

// //HOF {Higher order Functions}:
// //1. mapping : 
// let n=[1,2,3,4,5]
// let a=n.map(n=>n+5)
// console.log(a)

// //2. filtering:
// let a=[2,4,5,8,10]
// let n=a.filter(n=>n%2===0)
// console.log(n)

// //3. reducing :
// let a=[4,2,4,5,3,8]
// let n = a.reduce((acc,a)=>acc+a)
// console.log(n)

// //Recursion : 
// function countdown(n){
//     if(n===0) return;
//     console.log(n);
//     countdown(n-1) //recursive call
// }
// countdown(10)

// //Currying :
// // without currying -- 
// function x(a,b,c){
//     return a*b*c;
// }
// console.log(x(1,2,3))

// //same with currying - 
// function x(a){
//     return function(b){
//         return function (c){
//             return a*b*c;
//         }
//     }
// }
// console.log(x(1)(2)(3))

// //9 January :

// //First Class Functions :
// let add = function(x,y){
//     return (x+y)
// }
// console.log(add(1,2))

// let greet = function (name){
//     return `hello ${name}`
// }
// console.log(greet("yash"))

// function sayHello(fn){
//     return `hi ${greet("yash")}`
// }
// console.log(sayHello())

// function operate(x,y,operation){
//     return operation(x,y)
// }
// console.log(operate(2,3,(x,y)=>x*y))

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number * 2);
// });

// // 13 Jan

// let obj={
//     name:"ram",
//     age:20,
//     course:"AIFT",
//     intro:function(){
//         console.log("Hi I am " +this.name)
//     }
// }
// obj.intro()

