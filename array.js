console.log('ARRAYS')

const myStudents = ['Miriam','Delight','Progress','Petra','Dappa','Tems','Caleb','Felix','Henry','Cruz','Paul','Fidelis','Camilus','Victory','Grace','Amas'];
console.log(myStudents);

var firstName = myStudents[0];
console.log(firstName)

var myName = myStudents[13];
console.log(myName)

myStudents[13] = 'Temple';
console.log(myStudents)

let numOfStudents = myStudents.length;
console.log(numOfStudents)


const myShoppingList = ['Milk','Bread','Apples'];
console.log(myShoppingList);

let numOfList = myShoppingList.length;
console.log(numOfList);

myShoppingList[1] = 'Bananas'
console.log(myShoppingList);

console.log(myShoppingList)

//ARRAY METHODS
//Adding Elements
myStudents.push('Victory');//Adding elements to the last of the array
console.log(myStudents);

myStudents.unshift('Wilson');//Adding elements to the start of the array
console.log(myStudents);

myStudents.shift();//Removing the first element in an array
console.log(myStudents);

myStudents.pop();//Removes the last element in an array
console.log(myStudents);

myStudents.splice(11,1);//Removes an element from an array
console.log(myStudents);

myStudents.splice(14,1,'Victory');//Replaces an element from an array
console.log(myStudents);

const victoryIndex = myStudents.indexOf('Victory')
console.log(victoryIndex)

const arr = ['Wilson','Daniel','Wilson','Joe','Raymond','Wilson']
const wilsonIndex = arr.filter((name) => name === 'Wilson')
console.log(wilsonIndex);

const sortedArr = myStudents.sort()
console.log(sortedArr)

myStudents.reverse()
console.log(myStudents)



//Exercise 2
//1
const myGroceryList = []
console.log(myGroceryList)

//2

myGroceryList.push('Milk','Bread','Apples')
console.log(myGroceryList)

//3
myGroceryList.splice(1,1,'Bananas','Eggs')
console.log(myGroceryList)


//4
const lastItem = myGroceryList.pop()
console.log(lastItem)
console.log(myGroceryList);


//5
const sortedGroceryList = myGroceryList.sort()
console.log(sortedGroceryList)

//6

const milkIndex = myGroceryList.indexOf('milk')
console.log(milkIndex)

//7
myGroceryList.splice(1,0,'Carrots','Lettuce')
console.log(myGroceryList)

//8
const newList = ['Juice','Pop']

//9
const concatList1 = myGroceryList.concat(newList)
console.log(concatList1)
const concatList2 = concatList1.concat(newList)
console.log(concatList2)

//10
const lastIndex = concatList2.length -1;
console.log(lastIndex)


//MULTIDIMENSIONAL ARRAYS
const myArr = [
    [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]],
    [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,'W',4]],
    [[1,2,3,4],[1,2,3,4],[1,'R',3,4],[1,2,3,4]]    
];

console.log(myArr[1][3][2])
console.log(myArr[2][2][1])


//OBJECTS IN JAVASCRIPT
const victory= {
firstName: 'Victory',
lastName: 'Onyedika',
age: 17,
gender: 'Female',
complextion: 'Chocolate',
height: '5.2',
weight: '57'
};

const myHeight = victory.height;//Dot Notation
console.log(myHeight)

const myWeight = victory['weight']
console.log(myWeight)

victory['weight'] = '60'
console.log(victory)

victory ['lastName'] = 'Grande'
victory.middleName = 'Onyedika'

console.log(victory)

//EXERCISE 4
//1

const myCar= {
make: 'Toyota',
model: 'Corolla',
color: 'Blue',
bodyStyle: 'Hatchbacks',
carYear: '2021'
};

// 2
let carColor =  "Color"

myCar['carColor'] = 'Silver'
console.log(myCar)

//3
carColor = 'forSale'
myCar[carColor] = false;
console.log(myCar)

//4
const make = myCar.make
const model = myCar['model']
console.log(`Make: ${make}`)
console.log(`Model ${model}`)

//5
const forSale = myCar['forSale']
console.log(`Is car for sale?: ${forSale}`)


//WORKING WITH OBJECTS AND ARRAYS
//OBJECTS IN OBJECTS
const student = {
    fullName: 'Peter Obi',
    jambReg: '40263264HB',
    matNum: 'u2014/5575001',
    bio: {
        age: '32',
        gender: 'M',
        dob: '12/2/1990',
        stateOfOrigin: 'Anambra',
        lga: 'Njikoka',
        healthStatus: {
            bloodGroup: '0+',
            genoType: 'AA',
            mantus: 'false',
        }

    },
    levels: ['LV100', 'LV200', 'LV300', 'LV400'],
    currentLevel: 'LV300',
    courses: [
        {
            "YR1": {
                sem1: ['MTH110.1', 'GES100.1', 'PHY101.1'],
                sem2: ['MTH114,2', 'GES104.2', 'PHY102.2'],

            },
            "YR2": {

                sem1:[],
                sem2:[]
            }
        }

    ]

}


const myGenotype = student.bio['healthStatus']['genoType']
console.log(myGenotype)

console.log(student.currentLevel)

const ges104 = student.courses[0].YR1['sem2'][1]
console.log(ges104)

//EXERCISE 5
//1
const people =  {
    friends:[],
}

//2
let frnds1 = {
    firstName:'Elgina',
    lastName: 'Oyem',
    idValue: '22/10/2001'
}
let frnds2 = {
    firstName: 'Emmanuella',
    lastName: 'Owate',
    idValue: '30/5/2005'
}
let frnds3 = {
    firstName: 'Deborah',
    lastName: 'Elijah',
    idValue: '5/6/2004'
}

//3
people.friends.push(frnds1,frnds2,frnds3)

//4
console.log(people)

//OPERATORS
console.log('1' + '1')
console.log(1 + 1)
console.log('1' + 1)


const sum = 7 + 3;
const minus = 7 - 3;
const times = 7 * 3;
const divide = 7 / 3;
const raise = 7** 3;
const modulus = 7 % 3;


//COMPARISON OPERATORS
console.log(7 > 3)// true
console.log(7 < 3)// false
console.log(7 >= 3)// true
console.log(7 <= 3)// false
console.log(7 === 3)// false
console.log('Wilson' === 'wilson')// false
console.log(7 !== 3)// false

//LOGICAL OPERATORS
//AND, OR
const x = 10; const y = 20;

const myAnswer = 10 < 20 || ('Wilson' === 'wilson')