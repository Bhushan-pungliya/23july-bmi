'use strict'

let jeffMass=80;
let jeffHeight=1.6;

let toddMass=71;
let toddHeight=1.9;

function Bmicalc(mass,height)
{
    let bmi=mass/(height*height);
    return bmi;
}

let bmiOfjeff=Bmicalc(jeffMass,jeffHeight);
let bmiOftodd=Bmicalc(toddMass,toddHeight);
//console.log(bmiOfjeff)
//console.log(bmiOftodd)

bmiOfjeff>bmiOftodd?console.log(`Is Jeff has BMI higher than Todd ? True`) :
            console.log(`Is Jeff has BMI higher than Todd ? False`) 