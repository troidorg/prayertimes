const API_DEBUG = false;



/* API CLIENT CODE 

	Makes calls to the the library https://apis.google.com/js/api.js

	All code in this file is not a derivative of quickstart (or reference samples) code
	Written using the library's reference docs

	Consider never contributing derivatives of their quickstart (or reference samples) code
	to avoid attribution, Apache 2.0 license compliance, and documentation of such things

	For testing:
		const API_DEBUG = true;
		run webserver on localhost
		issue a Client ID and initialize CLIENT_ID below
		test
		revoke Client ID and erase / whatever security stuff

	Library reference: https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md


*/

if (API_DEBUG) {

	/* string client id, initialized to dummy value */
	const CLIENT_ID = 1;

	/* one of:
		"https://www.googleapis.com/auth/spreadsheets.readonly"
		"https:https://www.googleapis.com/auth/spreadsheets" - this one will allow writes
	*/
	const SCOPE_STR = "";

	/* string they need */
	const DISC_DOC = "https://sheets.googleapis.com/$discovery/rest?version=v4";

	const INIT = {discoveryDocs:[DISC_DOC], clientId:CLIENT_ID, scopes:SCOPE_STR};

	/* load client and oauth library */
	gapi.load("client:auth2", () => {console.log("client & auth loaded")});

/*
	TODO: defer program execution until cb=gapi.loaded_0 (name of above libraries packaged 
	in one .js; see	network in web inspector) is fully loaded.
	Otherwise, gapi.client objects below don't yet exist since cb=gapi.loaded_0 is not
	yet loaded.

*/

	/* user logs in (returns promise) */
	gapi.client.init(INIT);

	/* load sheets methods for gapi.client (returns promise) */
	gapi.client.load(DISC_DOC);

	/* make requests */

}



/* CLOCK CODE

	Code controlling date and times comes after:
		loading API client & auth libraries
		logging in
		making requests for current prayer times

*/
		
const ID_TIME = document.getElementById("time");
const ID_WEEKDAY = document.getElementById("weekday");
const ID_MONTH_G = document.getElementById("month-g");
const ID_MONTH_H = document.getElementById("month-h");
const ID_YEAR_H = document.getElementById("year-h");
const ID_FULL_DATE_G = document.getElementById("full-date-g");
const ID_DATE_H = document.getElementById("date-h");

const hijri_locale = "ar-SA-u-islamic-umalqura";
const masjid_locale = "en-CA";


var date = new Date();


// setTimeout(updateSolar,(milliseconds between midnight and current time))
// setTimeout(updateHijri, (ms between maghrib and currentime))


//All solar current day value initializations

ID_FULL_DATE_G.textContent = date.toLocaleDateString();


//All hijree current day value initializations

ID_YEAR_H.textContent = date.toLocaleString(hijri_locale, {year:"numeric"})
ID_MONTH_H.textContent = date.toLocaleString(hijri_locale, {month:"long"})
ID_WEEKDAY.textContent = date.toLocaleString(hijri_locale, {weekday:"long"})
ID_DATE_H.textContent = date.toLocaleString(hijri_locale, {day:"2-digit"})


setInterval(updateClock, 1000);

function updateClock() {

	date = new Date();

	ID_TIME.textContent = date.toLocaleString(masjid_locale, {hour: "2-digit", minute: "2-digit", second: "2-digit"}).substring(0, 8);

}

function updateSolar() {

	setInterval(updateSolar, 3600000);

	//Add all updates that happen at midnight

	ID_FULL_DATE_G.textContent = date.toLocalDateString();

}

function updateHijri() {

	//setTimeout(ms left until tommorow's maghrib);

	//Add all hijree updates that happen at sunset

	ID_WEEKDAY.textContent = date.toLocaleString(masjid_locale, {weekday:"long"});

}