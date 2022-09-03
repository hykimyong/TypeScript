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

//읽기전용 readonly tuple사용
const players: readonly [string, number, boolean] = ['nico',1,true];
//typescript의 보호장치를 비활성화시킴
const a : any[] = [1,2,3,4];
const b : any = true;



function Test(){
    return (<h3>nicos</h3>);
}


export default Test;
