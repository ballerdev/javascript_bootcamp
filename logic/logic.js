console.log('Hello, Logic')

if(x < 2){
console.log('Buy black marker')
//code
//let x = 20
//const x =20
// console.log(x)
//
//console.log(y)
}else{
    //Alternative Code
    console.log('Buy any color')
}

//Exercise 1
//1
let myVariable = true

//2
console.log(myVariable)

//3
if(myVariable){
    console.log('My variable is true')
}

//4
if(!myVariable){
    console.log('My variable has changed');
}

if(myVariable){
    console.log('My variable is true') 
}else {
    console.log('My variable has changed');
}

//ELSE-IF STATEMENT
const marker = 'red'
const markerLength = 'short'

if(marker === 'black' && markerLength === 'short'){
console.log('Buy black and short marker')
}else if((marker === 'red' || marker === 'green')&& markerLength ==='short'){
    console.log('Buy red or green marker and short')
}else{
    console.log('Buy any marker')
}

if(marker === 'black'){
    if(markerLength === 'short'){
        console.log('buy black and short marker')
    }else {
        console.log('let\'s manage the long one')
    }
}

//Exercise 2
//1
// const age = window.prompt()

//2
// const ageToNum = parseInt(age)
//3
// let information;

// //4
// if(ageToNum >= 21){
//     message = 'You\'re only allowed entry, and you can purchase alcohol'
// }else if(ageToNum >= 19){//5
//    message = 'You\'re only allowed entry,you can\'t purchase alcohol' 
// }else {//6 
//     message = 'You\'re not allowed here, plase go home'
// }

// //7
// console.log(message)

//CONDITIONAL TENARY OPERATOR
if(gender === 'Male'){
    console.log('He is a boy')
}else if(gender === 'Female'){
    console.log('She is a girl')
}else{
    console.log('He or she is others')
}

gender === 'Male'? console.log('He is a boy') : gender === 'Female' ?  console.log('She is a girl') :   console.log('He or she is others')
   

//Exercise 3
//1

let id = true

//2
const message = id ? 'You\'re allowed inside' : 'You\'re not allowed';

//3
console.log(message)

//SWITCH STATEMENTS
const currentDay = 'Monday'

switch(currentDay){
    case 'Monday':
        console.log('I hate Mondays' );
        break;
    case 'Tuesday':
        console.log('Tuesdays is no class ') ;
        break;
    case 'Wednesday':
        console.log('I love Wednesdays ') ;
        break;
    case 'Thursday':
        console.log('This is super story') ; 
        break;
    case 'Friday':
        console.log('Thank God is Friday (TGIF)');
        break;
    case 'Saturday':
        console.log('And on the 7th day, He Rested' );
        break;
    case 'Sunday' :
        console.log('see you all after service') 
        break;
    default:
        console.log('Invalid day selected')      
}