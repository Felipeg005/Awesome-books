import { DateTime } from "luxon";
const now = DateTime.now();
const timeDiv = document.querySelector('.time')
dt = DateTime.fromObject({day: 22, hour: 12 }, { zone: 'America/Los_Angeles', numberingSystem: 'beng'});
DateTime.fromISO("2017-05-15T08:30:00");
DateTime.now().toString();
timeDiv.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);