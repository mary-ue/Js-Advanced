'use strict';

/* 
  Получить геолокацию пользователя через Geolocation.getCurrentPosition() (WEB API).
  По координатам определить город, отправив запрос:
  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&langitude=00
*/

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&langitude=${longitude}`);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    console.log(data.city);
  } catch(e) {
    console.error(e);
  }
}

getMyCity();
