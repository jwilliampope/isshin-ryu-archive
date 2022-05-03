/*
Assignment Name: Final Project CMP244 Spring 2022
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
Comments: The validator flags "unexpected let." The JavaScript is used on the contact page and collects name and email from user, displaying a message to the user that their information has been received.
*/

//INITIALIZING VARIABLES, ADD SUBMIT, PREVENT DEFAULT BEHAVIOR, TARGET FORM

let emailCollector = document.getElementById("emailCollector");
emailCollector.addEventListener("submit", e => {
  e.preventDefault()
  let ourFormData = new FormData(e.target)
  let userFirstName = ourFormData.get("firstName")
  
  // STRING LITERAL MESSAGE (` `) AND PLACEHOLDER (${}) ARE PASSED TO 'MAIN CONTENT'
  let updatedHtmlContent = `<h2> Thank You for subscribing, ${userFirstName}!</h2>
  <p>Check your email for updates.</p>
    <p><small>"All things in the universe will change." ~
Tatsuo Shimabuku</small></p>`
  
  // MESSAGE RETURNED TO USER IN 'MAIN CONTENT' WITH USER'S FIRST NAME

  let ourMainContent = document.getElementById("mainContent")
  ourMainContent.innerHTML = updatedHtmlContent
});

// END OF JS FILE
