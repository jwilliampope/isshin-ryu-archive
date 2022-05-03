/*
Assignment Name: Final Project CMP244 Spring 2022
Description:  This website, in fulfillment of the Final Project requirements for CMP244-26583 Web Design II (County College of Morris, Spring 2022), is intended to supplement material found at the website of a local martial-arts school located in Northwest New Jersey. This file forces a date change each January 1, to display the appropriate year. This "set it and forget it" program eliminates the need to manually change the copyright information each year.   
Student Name: Jack Pope
Course: CMP244-26583
Professor: Michael Sidaras-Tirrito
School: County College of Morris
Semester: Spring 2022
Date Modified: 05/01/2022
Text Editor: Brackets
Tested Browsers: Chrome, Edge, Firefox
Validation Engine: https://codebeautify.org/jsvalidate 
Comments: The validator flags "variable used before it was defined," this seems to be an issue which predates implementation of ES6. The JavaScript used forces a copyright year change each January 1, on all pages. 
*/

// 

//VARIABLE TO STORE DATE BASED ON CURRENT YEAR
date = new Date().getFullYear();

// SPAN ID "YEAR" HOLDS DATE

document.getElementById("year").innerHTML = date;

 // END OFJS FILE