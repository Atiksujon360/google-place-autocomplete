// placeReducer.js
const initialState = {
  places: [],
  selectedPlace: null, // Updated to include the selected place and its location
  error: null,
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLACES_SUCCESS":
      return { ...state, places: action.payload, error: null };
    case "FETCH_PLACES_ERROR":
      return { ...state, places: [], error: action.payload };
    case "SET_SELECTED_PLACE":
      return { ...state, selectedPlace: action.payload.place, error: null };
    default:
      return state;
  }
};

export default placeReducer;
