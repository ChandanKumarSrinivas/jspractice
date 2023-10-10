//hello world
console.log("hello world!");

//if else condition statements
var a=5;
var b=10;
if(a+b > 10)
{
    console.log(a)
}
else if(a+b < 10)
{
    console.log(b)
}
else console.log("equal to 10");

//switch
var nam='one';
switch(nam)
{
    case 'one':console.log('value is 1');
    break;
    case 'two':console.log('value is 2');
    break;
    default:console.log("value is 0");
}

//loops
for(var i=0; i<10; i++)
console.log(i);

let fruits=['apple','peach','orange']
fruits.forEach(item => console.log(item));
for(item of fruits){
    console.log(item);
}
for(item in fruits){
    console.log(item);
}
 var i=0;
 while(i<5){
    console.log(i);
    i++;
 }
do{
    console.log(i);
    i++;
}while(i<10)

//operators
var i=1,j=2;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

//hoisting
const p='hello world';
console.log(p);

//let and const
let a='hello';
let fun=function f1(){
    let a='world';
    console.log("f1"+a);
}
f2();
console.log(a);

const b='world';
function f2(){
    console.log("f2"+b);
}
f2();
console.log(b);

for(var i=1;i<10;i++)
{
    console.log(i);
}
console.log(i);
for(let j=1;j<10;j++)
{
    console.log(j);
}

var f=1;
console.log(f);

console.log(name+' hello');
console.log(`${name} hello`);

//objects in js
var obj={key:'value',value:'key',heyy(){console.log("hello");}};
obj.heyy();
console.log(obj.key);
console.log(obj['value']);

console.log(+0==-0);
console.log(Object.is(+0,-0));
console.log(+0===-0);
console.log(NaN == NaN);
console.log(Object.is(NaN,NaN));

//arrays
var a=['hello',2,true]
for(var i=0;i<3;i++)
{console.log(a[i])}
a.push("hi");
console.log(a.pop())
console.log(a.shift())
console.log(a)
a.push("hi");
a.push("hello");
a.push("i am");
a.push("chandan");
console.log(a)
a.splice(2,3,'hola')
console.log(a)
console.log(a.slice(1,2))
a.forEach(item => console.log(item))

//functions
console.log(boy(2,3));
function boy(a,b){
    return a+b
}

//iife
(function(x, y){console.log( x*y )})( 2,3 )

//call and apply and bind
let bird={
    name:"chicken",
    eat(a){
        console.log(`${this.name} ate ${a}`)
    }
}
let human={name:'sparrow'}
console.log(bird.eat('sprouts'))
console.log(bird.eat.call(human,'sprouts'));
console.log(bird.eat.apply(human,['sprouts']));
let he=bird.eat.bind(human)
he('mangoes')

//this
let ob={
    name:"john",
    display(){
        console.log(this)
    }
};
ob.display();

//arrow function
const objj={ 
    name:"john",
    sing(){
        console.log('a',this)
        var af=()=>{console.log('b',this)}
        af();
    }
};
objj.sing();

//higher order functions
function fn(){
    console.log("heyy")
}
setInterval(fn,1000)
clearInterval(1)

function age(minage){
    return function(age){
    return age>=minage}
}

console.log('voting status:'+age_req(18)(17));
console.log('driving status:'+age_req(16)(17));
console.log('marrying status:'+age_req(21)(17));

//encapsulation
class Student{
    constructor(r,n){
        this.r=r;
        this.n=n;
    }
    attendance(){
        console.log("roll no "+this.r+" is "+this.n);
    }
}
var adam=new Student(10,'Nick');
adam.attendance();

 class Box{
    constructor(l){
        this.l=l;
    }
    display(){
        console.log(this);
    }
 }
 let ob1=new Box(10);
 ob1.display();

 var parent={
    name:'parent',
    sing:()=>{console.log(`${name} singing ....`)},
    food:()=>{console.log("This is my food")}
 }
 var child={
    name:'child',
    food:()=>{console.log("this is my foood")}
 }
 child.__proto__=parent;
 for(let prop in child){console.log(prop+"---"+child.hasOwnProperty(prop));};
 
 class fruit{
    constructor(name,col){
        this.name=name;
        this.col=col;
    }
    effect(){
        console.log(this)
    }
 }
 class banana extends fruit{
    constructor(name,color,type){
        super(name,color);
        this.type=type;
    }
    effect(){
        super.effect();
    }
 }
 var pp=new banana('apple','red','seedless');
 pp.effect();
 var ppp=new fruit('apple','red');
 ppp.effect();

 //overloading
 class vehicle{
    constructor(name){
        this.name=name;
    }
    display(){console.log("I have "+this.name)}
    display(cost){console.log("I have "+this.name+" of cost "+cost)}
 }
 var v=new vehicle('Buggatti')
 v.display()
 v.display(200000)

//overriding
 class bike extends vehicle{
    constructor(name){
        super(name);
    }
    display(){
        console.log("I love "+this.name);
    }
 }
 k=new bike("r15");
 k.display();

 //exception handling
 const err= new Error("yup it's error");
 err.message

 function aaa(){
    const b = new Error("Hi I'm error"); 
    return b;
}
aaa();

try{
    console.log(q);
}
catch(error){
    console.log("We got an error "+error)
}

function able(age){
if(age<18){
    try{
        throw new Error("You are under age.")
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Nobody can stop me!!")
    }
}
else{
    console.log("You can vote.")
}
}
able(17);

//Document
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all)
document.title = 'holaa';
console.log(document.title);
var age=prompt("What is your age?")
if(age>18){
    alert("Valid to vote")
}
else{
    alert("Invalid")
}

//dom
console.dir(document.getElementById("1"))
console.log(document.getElementsByClassName("st"))
console.log(document.getElementsByTagName("h3"))

function change(id){
    id.innerHTML="hehehe"
}

//closure
let amm=(gdad)=>(dad)=>(son)=>console.log(`${gdad}-->${dad}-->${son}`);
let curriedMultiply=(a)=>(b)=>a*b;
let multiplyBy7=curriedMultiply(7);
let addd=(a)=>(b)=>console.log(a+b);
let aBy2=addd(2);
const add=(a,b)=>a+b;
const mult=(a,b)=>a*b;

const promise=new Promise((resolve,reject)=>{
    if(true)
    resolve("It worked!");
    else
    reject("It broken!");
})

//map fn
let arr=[1,2,3,4]
let newarr=arr.map(num=>num+1)
console.log(newarr)

let x=7
const ad=(y)=>x+=y

//filter fn
let filar=arr.filter(num=>num>1)
console.log(filarr)

//reduce fn
let redarr=redarr.reduce((acc,num)=>acc+num,5)
console.log(redarr)