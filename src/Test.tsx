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
nico.name = "las";


function Test(){
    return (<h3>nico</h3>);
}


export default Test;
