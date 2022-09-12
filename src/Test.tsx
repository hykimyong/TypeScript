import React from 'react';


type Age = number;
type Name = string;
type Player = {
    readonly name : Name,
    age ?: Age
}
const playerMaker = (name:string) : Player => ({name});
const nico = playerMaker('nico');
nico.age = 12;

let a: unknown;
if(typeof a ==='number'){
    let b = a+1;
}
if(typeof a === 'string'){
    let b = a.toUpperCase();
}

function hello(name:string|number){
    if(typeof name === 'string'){

    }else if(typeof name === 'number'){
        
    }else{
        
    }
} 


function Test(){
    return (<h3>nico</h3>);
}


export default Test;
