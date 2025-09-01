
// Placeholder for Google API integration
const GOOGLE_API_KEY = AIzaSyAZAXV_2nX8kcmZnJ-s6VqxGOvl02NwiAg ;

function getGoogleMapsUrl(location) {
  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${encodeURIComponent(location)}`;
}

function getGoogleCalendarUrl(event) {
  return `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
    event.title
  )}&dates=${event.start}/${event.end}&location=${encodeURIComponent(
    event.location
  )}`;
}

module.exports = { GOOGLE_API_KEY, getGoogleMapsUrl, getGoogleCalendarUrl };
