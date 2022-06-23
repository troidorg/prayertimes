const ID_TIME = document.getElementById("time");
const ID_WEEKDAY = document.getElementById("weekday");
const ID_MONTH_G = document.getElementById("month-g");
const ID_MONTH_H = document.getElementById("month-h");
const ID_YEAR_H = document.getElementById("year-h");
const ID_FULL_DATE_G = document.getElementById("full-date-g");
const ID_DATE_H = document.getElementById("date-h");

var date = new Date();

// setTimeout(updateSolar,(milliseconds between midnight and current time))
// setTimeout(updateHijri, (ms between maghrib and currentime))

//All solar current day value initializations
ID_FULL_DATE_G.textContent = date.toLocaleDateString();


//All hijree current day value initializations
ID_YEAR_H.textContent = date.toLocaleString("ar-SA-u-ca-islamic-umalqura", {year:"numeric"})
ID_MONTH_H.textContent = date.toLocaleString("ar-SA-u-ca-islamic-umalqura", {month:"long"})
ID_WEEKDAY.textContent = date.toLocaleString("ar-SA-u-ca-islamic-umalqura", {weekday:"long"})
ID_DATE_H.textContent = date.toLocaleString("ar-SA-u-ca-islamic-umalqura", {day:"2-digit"})


setInterval(updateClock, 1000);

function updateClock() {

	date = new Date();

	ID_TIME.textContent = date.toLocaleString("en-CA", {hour: "2-digit", minute: "2-digit", second: "2-digit"}).substring(0, 8);

}

function updateSolar() {

	setInterval(updateSolar, 3600000);

	//Add all updates that happen at midnight
	ID_FULL_DATE_G.textContent = date.toLocalDateString();

}

function updateHijri() {

	//setTimeout(ms left until tommorow's maghrib);

	//Add all hijree updates that happen at sunset
	ID_WEEKDAY.textContent = date.toLocaleString("ar-SA-u-ca-islamic-umalqura", {weekday:"long"});
	
}