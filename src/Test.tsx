import React from 'react';


type Age = number;
type Name = string;
type Player = {
    readonly name : Name,
    age ?: Age
}
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
    return (<h3>nico</h3>);
}


export default Test;
