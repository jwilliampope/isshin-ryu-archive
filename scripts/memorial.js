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
Comments: Validator returns numerous flags - "$ used before defined," "use strict," and spacing issues. jQuery used -  When the user mouseenters the header zone, an alert displays Shimabuku's birth and death dates.
*/

// When the user mouseenters the header zone, an alert displays Shimabuku's birth and death dates.

$(document).ready(function() {
            $("#home").mouseenter(function () {
            alert("TATSUO SHIMABUKU - September 19, 1908 – May 30, 1975");
        });
    });

// END OF JS FILE