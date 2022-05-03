/*
Assignment Name: Final Project CMP244 Spring 2022 - Isshin-Ryu Archive Home page
Description:  This website, in fulfillment of the Final Project requirements for CMP244-26583 Web Design II (County College of Morris, Spring 2022), is intended to supplement material found at the website of a local martial-arts school located in Northwest New Jersey. I have the pleasure of knowing the owners, who teach a particular style of karate called Isshin-Ryu, which was originated by Tatsuo Shimabuku in the years following World War II on his native island of Okinawa. I intend to provide further information about Shimabuku’s life and philosophy of martial arts.  Additionally, I have incorporated many of the techniques that were learned in this class, as taught by Professor Michael Sidaras-Tiritto.  The user will encounter creative and proper (it is hoped) use of styling, JavaScript, animations, and the like.  
Student Name: Jack Pope
Course: CMP244-26583
Professor: Michael Sidaras-Tirrito
School: County College of Morris
Semester: Spring 2022
Date Modified: 05/01/2022
Text Editor: Brackets
Tested Browsers: Chrome, Edge, Firefox
Validation Engine: https://codebeautify.org/jsvalidate
Comments: The validator flags "variable used before it was defined,"  which seems to be an issue that predates implementation of ES6. Javascript is used to enable the user to generate a random code squote from the "Eight Codes of Isshin-Ryu."
*/


// ARRAY TO STORE RANDOM CODE QUOTES FROM "THE EIGHT CODES"

const codes = [
    {
        code: '1. A Person’s Heart is like Heaven and Earth.'
    },
    {
        code: '2. The Blood Circulating is like Moon and Sun.'
    },
    {
        code: '3. The manner of drinking and spitting is either hard or soft.'
    },
    {
        code: '4. A person’s unbalance is the same as a weight.'
    },
    {
        code: '5. The body should be able to change direction at any time.'
    },
    {
        code: '6. The time to strike is when the opportunity presents itself.'
    },
    {
        code: '7. The eye must see all sides.'
    },
    {
        code: '8. The ear must listen in all directions.'
    }   
]

// INITIALIZING VARIABLES FOR THE BUTTON AND DISPLAY AREA

const codeBtn = document.querySelector('#codeBtn');
const code = document.querySelector('#code');

codeBtn.addEventListener('click', displayCode);


// THE displayCode FUNCTION GENERATES A RANDOM NUMBER BEWTEEN 1 - 8 AND GENERATES THE APPROPRIATE CODE QUOTE
function displayCode()
{
    let number = Math.floor(Math.random()*codes.length);
    code.innerHTML = codes[number].code;
}

// END OF JS FILE










