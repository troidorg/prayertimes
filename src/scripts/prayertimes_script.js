const time = document.getElementById("time");
const weekday = document.getElementById("weekday");
const month_g = document.getElementById("month-g");
const month_h = document.getElementById("month-h");
const year_h = document.getElementById("year-h");
const full_date_g = document.getElementById("full-date-g");
const date_h = document.getElementById("date-h");

var s = "";
var d = new Date();

// setTimeout(midnight,(milliseconds between midnight and current time))
// setTimeout(maghrib, (ms between maghrib and currentime))

//All solar current day value initializations
full_date_g.textContent = d.toLocaleDateString();


//All hijree current day value initializations
year_h.textContent = d.toLocaleString("ar-SA-u-ca-islamic-umalqura", {year:"numeric"})
month_h.textContent = d.toLocaleString("ar-SA-u-ca-islamic-umalqura", {month:"long"})
weekday.textContent = d.toLocaleString("ar-SA-u-ca-islamic-umalqura", {weekday:"long"})
date_h.textContent = d.toLocaleString("ar-SA-u-ca-islamic-umalqura", {day:"2-digit"})


setInterval(update, 100);

function update() {

	s = "";
	d = new Date();

	time.textContent = d.toLocaleString("en-CA", {hour: "2-digit", minute: "2-digit", second: "2-digit"}).substring(0, 8);

}

function midnight() {

	setInterval(midnight, 3600000);

	//Add all updates that happen at midnight
	full_date_g.textContent = d.toLocalDateString();

}

function maghrib() {

	setInterval(maghrib, 3600000);

	//Add all hijree updates that happen at sunset
	weekday.textContent = d.toLocaleString("ar-SA-u-ca-islamic-umalqura", {weekday:"long"});
	
}