import { MenuItem, TextField } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const LocationSearchInput = (props) => {
  const [address, setAddress] = useState("");
  const SettingAddress = props.setAddress;

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = (selectedAddress) => {
    setAddress(selectedAddress);
    geocodeByAddress(selectedAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => SettingAddress({ name: selectedAddress, ...latLng }))
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField fullWidth label="City/Location" {...getInputProps()} />
            <div className="autocomplete-dropdown-container ">
              <div className="list-group">
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center">Loading</div>
                ) : (
                  suggestions.map((suggestion) => {
                    const style = suggestion.active
                      ? {
                          backgroundColor: "secondary",
                          cursor: "pointer",
                          fontWeight: "600",
                          opacity: "0.8",
                        }
                      : {
                          backgroundColor: "paper",
                          cursor: "pointer",
                        };
                    return (
                      <MenuItem
                        {...getSuggestionItemProps(suggestion, {})}
                        sx={{ background: "background.paper", ...style }}
                      >
                        {suggestion.description}
                      </MenuItem>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationSearchInput;
