const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const updateDateAndTime = () => {
	const date_event = new Date('2024-09-04');
	const date = new Date();
	const days = $('#days').firstElementChild;
	const hours = $('#hours').firstElementChild;
	const minutes = $('#minutes').firstElementChild;
	const seconds = $('#seconds').firstElementChild;

	const diff = date_event - date;

	const days_diff = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours_diff = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes_diff = Math.floor(diff / 1000 / 60) % 60;
	const seconds_diff = Math.floor(diff / 1000) % 60;

	(days_diff < 10) ? days.textContent = '0' + days_diff : days.textContent = days_diff;
	(hours_diff < 10) ? hours.textContent = '0' + hours_diff : hours.textContent = hours_diff;
	(minutes_diff < 10) ? minutes.textContent = '0' + minutes_diff : minutes.textContent = minutes_diff;
	(seconds_diff < 10) ? seconds.textContent = '0' + seconds_diff : seconds.textContent = seconds_diff;
};

setInterval(updateDateAndTime, 1000);

updateDateAndTime();

