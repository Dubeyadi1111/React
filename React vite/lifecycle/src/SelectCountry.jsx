import React, { useState } from "react";

function SelectCountry() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const data = [
        { name: "USA", cities: ["New York", "California", "Texas", "Miami"] },
        { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal", "Calgary"] },
        { name: "India", cities: ["Mumbai", "Delhi", "Bangalore", "Chennai"] },
        { name: "Australia", cities: ["Sydney", "Melbourne", "Brisbane", "Perth"] },
        { name: "Germany", cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"] }
    ];

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedCity(""); 
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    
    const cities = data.find((e) => e.name === selectedCountry)?.cities;

    return (
        <div>
            <label>Select Country: </label>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="" disabled>
                    Choose a country
                </option>
                {data.map((country, index) => (
                    <option key={index} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </select>

            {selectedCountry && (
                <>
                    <label>Select City: </label>
                    <select value={selectedCity} onChange={handleCityChange}>
                        <option value="" disabled>
                            Choose a city
                        </option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {selectedCity && <p>Welcome to : {selectedCountry}, {selectedCity}</p>}
        </div>
    );
}

export default SelectCountry;
