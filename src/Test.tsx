import React, { useState } from 'react';


type Age = number;
type Name = string;
type Player = {
    readonly name : Name,
    age ?: Age
}
//generic으로 타입을 받는것도 가능
type SuperPrint = {
    <T, M>(a: T[],b:M): T
}
//generic을 함수형으로 구현
function superPrint1<T>(a:T[]){
    return a[0];
}

const superPrint:SuperPrint = (a) =>a[0];
const a = superPrint([1,2,3,4],'x');
const b = superPrint([true,false,true],1);
const c = superPrint(['a','b','c'],false);
const d = superPrint([1,2,true,false,'hello'],[]);

//arr:number[]대신 generic으로 Array[number]로 사용가능
function printAllNumbers (arr : Array<number> ){
    return arr[0];
}

printAllNumbers([1,2,3]);
//call signature
//오버로딩 
type Add = {
    (a:number,b:number) :number
    (a:number,b:number,c:number) :number
}
const add:Add =(a,b,c?:number)=> {
    if(c) return a+b+c;
    return a+b;
}
const playerMaker = (name:string) : Player => ({name});
const nico = playerMaker('nico');
nico.age = 12;



function Test(){
    const [count,setCount]  = useState<number>(0);

    return (<h3>nico{count}</h3>);
}


export default Test;
