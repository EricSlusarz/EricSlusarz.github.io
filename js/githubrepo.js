$(function(){

//console.log("All set and loaded!");

$.getJSON("https://api.github.com/users/EricSlusarz", function (getprofiledata, testStatusOfProfileURL, jqXHR_Profile) {

// console.log ("Get request has worked!");
// console.log ("The data receieved was: " + getprofiledata);
// console.log ("----------------------------");
// console.log (getprofiledata);

var myname = getprofiledata.login;
var urlforwebsite = getprofiledata.repos_url;

//$("div#reposection").append("Hello my name is: " + myname +"\n"+"\n");
//$("div#reposection").append(jqXHR_Profile.responseText);


$.getJSON(urlforwebsite, function (getRepoData, testStatusOfRepoURL, jqXHR_Profile){


// console.log ("Second Get request has worked!");
// console.log ("The data receieved was: " + getRepoData);
// console.log ("----------------------------");
// console.log (getRepoData);

$.each(getRepoData, function(indexForJSONRepo){
retrievedRepoData = getRepoData[indexForJSONRepo];
var titleOfRepo = retrievedRepoData.name;
var linkToRepo = retrievedRepoData.html_url;
var lastUpdateToRepo = retrievedRepoData.updated_at;

console.log("This is the title: "+ titleOfRepo);
console.log("This is the link: "+ linkToRepo);
console.log("This is the last update: "+ lastUpdateToRepo);

$("#output").append("<p>Title of Repository: " + titleOfRepo + "</p>");
$("#output").append("<a href='linkToRepo' <p>Link to the Repository: " + linkToRepo+ "</p></a>");
$("#output").append("<p>This repository was last updated: " + lastUpdateToRepo + "</p>");

$("#output").append("<hr>");





			}); 
		});	// End of Second get request to Repositories of Eric Slusarz user profile 
	}); // End of First get request to EricSlusarz user profile
}); //documnet ready function