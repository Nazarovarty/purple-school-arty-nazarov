const positionLat = 100.47;
const positionLong = 89.44;

const addressLat = 55.89;
const addressLong = 79.105;


let distance = Math.round(Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2));

console.log((distance));
