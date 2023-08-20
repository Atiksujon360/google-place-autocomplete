// placeActions.js
import mockPlaces from "./mockData"; // Import the mock data

export const fetchPlaces = (query) => async (dispatch) => {
  // Simulate an API call with a delay
  setTimeout(() => {
    const filteredPlaces = mockPlaces.filter((place) =>
      place.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({ type: "FETCH_PLACES_SUCCESS", payload: filteredPlaces });
  }, 500); // Simulate a delay of 500ms
};

export const setSelectedPlace = (place) => ({
  type: "SET_SELECTED_PLACE",
  payload: place,
});
