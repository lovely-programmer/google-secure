export const getUserLocation = () =>
  fetch(
    "https://api.ipgeolocation.io/ipgeo?apiKey=681b75feb83e42c6a4d32b9a7e23f906"
  )
    .then((response) => response.json())
    .then((data) => {
      // You can now access the location data in the "data" object
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
