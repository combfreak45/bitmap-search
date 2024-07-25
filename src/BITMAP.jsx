import React, { useState } from "react";

const BITMAP = () => {
  const cities = [
    ["Moscow", 0b0000000001000000000000000], // GMT +3
    ["Paris", 0b0000000000100000000000000], // GMT +2
    ["Berlin", 0b0000000000100000000000000], // GMT +2
    ["Brussels", 0b0000000000100000000000000], // GMT +2
    ["Amsterdam", 0b0000000000100000000000000], // GMT +2
    ["Rome", 0b0000000000100000000000000], // GMT +2
    ["London", 0b0000000000100000000000000], // GMT +1
    ["Dublin", 0b0000000000010000000000000], // GMT +1
    ["New York", 0b0000000000000000100000000], // GMT -4
    ["Washington, DC", 0b0000000000000000100000000], // GMT -4
    ["St. Louis", 0b0000000000000000010000000], // GMT -5
    ["Los Angeles", 0b0000000000000000000100000], // GMT -7
    ["Tokyo", 0b0001000000000000000000000], // GMT +9
    ["Beijing", 0b0000100000000000000000000], // GMT +8
    ["Ho Chi Minh City", 0b0000010000000000000000000], // GMT +7
    ["Mumbai", 0b0000000100000000000000000], // GMT +5
  ];

  const [offsetvalue, setOffsetvalue] = useState(0);

  const handleoffsetvalue = (e) => {
    setOffsetvalue(parseInt(e.target.value));
  };

  const searchcities = () => {
    const matchedCities = cities.filter(
      (city) => (city[1] >> (12 + offsetvalue)) & 1
    );
    return matchedCities.map((city) => city[0]);
  };

  const CityList = () => {
    return (
      <div>
        {cities.map((city) => (
          <div key={city[0]}>
            <input type="checkbox" id={city[0]} value={city[1]} />
            <label htmlFor={city[0]}>{city[0]}</label>
          </div>
        ))}
      </div>
    );
  };

  const OutputArea = ({ matchedCities }) => {
    return (
      <div>
        {matchedCities.length === 0 ? (
          <p>No cities found for the entered GMT offset.</p>
        ) : (
          <div>
            <p>Matched Cities:</p>
            <ul>
              {matchedCities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ margin: "100px 200px" }}>
      <div style={{ margin: "40px 0px" , display:"flex", gap:"5px"}}>
        <label htmlFor="gmtoffset">Enter GMT Offset Value:</label>
        <input
        style={{border:"solid 2px black"}}
          type="number"
          id="gmtoffset"
          min={-12}
          max={+12}
          value={offsetvalue}
          onChange={handleoffsetvalue}
        />
        <button onClick={searchcities}>Search</button>
      </div>
      <div>
        <CityList />
      </div>
      <div>
        <OutputArea matchedCities={searchcities()} />
      </div>
    </div>
  );
};

export default BITMAP;
