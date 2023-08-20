// AutocompleteInput.js
import React, { useState } from "react";
import { Input, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces, setSelectedPlace } from "../actions/placeActions";

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  const handleInputChange = (value) => {
    setInputValue(value);
    dispatch(fetchPlaces(value));
  };

  const handlePlaceSelection = (place) => {
    dispatch(setSelectedPlace(place));
  };

  return (
    <div>
      <Input
        placeholder="Search places"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <List
        dataSource={places}
        renderItem={(item) => (
          <List.Item onClick={() => handlePlaceSelection(item)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default AutocompleteInput;
