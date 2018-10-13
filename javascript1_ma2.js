//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance


var House = function() {
    this.type = "General";
};

House.prototype.visit = function() {
    return console.log("Walk to house");
};

var church = new House;
church.type = "Church";
church.visit();
console.log(church.prototype);

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [1,2,3,4,5,6,7,8,9,10];
var mySlicedArray = myArray.slice(4,5);


//3. Delete the last number in the array that you created above.

var newArray = myArray.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var strawberryText = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."


String.prototype.replaceStrawberries = function(stringObject) {
    var returnString = this;
    for (var x in stringObject) {
        returnString = returnString.replace(new RegExp(x, 'g'), stringObject[x]);
    }

    return returnString;
}

console.log(strawberryText.replaceStrawberries({'strawberry': 'banana', 'strawberries': 'bananas','Strawberry': 'Banana', 'Strawberries': 'Bananas'}));

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


var footballClubs = ["VIF", "TIL", "RBK"];

var changeButton = document.createElement('button');
changeButton.id = 'changeButton';
changeButton.innerHTML = 'Change the Array';
document.body.appendChild(changeButton);
console.log(footballClubs);

document.getElementById("changeButton").addEventListener("click", function(){
    
    footballClubs = [];
    footballClubs = ["Toyota", "Volvo","Mazda", "Volkswagen"];
    console.log(footballClubs);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var peopleArray = [
        {name: 'Ivar'},
        {name: 'Tore'},
        {name: 'Sven'}
];

var newPeopleArray = peopleArray.filter((person) => person.name === 'Tore');

//7. Create a simple function that logs the date.

function logDate() {
    var date = new Date();
    console.log(date.toLocaleDateString());
};