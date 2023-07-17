import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling
import citiesData from './citiesData.json';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [matchingCities, setMatchingCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);
  const [activeTab, setActiveTab] = useState('places');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const defaultCity = citiesData[0];

    if (!selectedCity) {
      setSelectedCity(defaultCity);
    }

    const matchingCity = citiesData.find(
      (city) => city.name.toLowerCase() === searchValue.toLowerCase()
    );

    if (matchingCity) {
      setSelectedCity(matchingCity);
      setActiveTab('places');
    } else if (!searchValue) {
      setSelectedCity(defaultCity);
    } else {
      setSelectedCity(null);
    }
  }, [searchValue]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (selectedCity && selectedCity.weather) {
        try {
          const response = await fetch(selectedCity.weather.icon);
          const data = await response.blob();
          const imageUrl = URL.createObjectURL(data);

          setWeather({ ...selectedCity.weather, imageUrl });
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setWeather(null);
        }
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleCityInput = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const matchingCities = citiesData.filter((city) =>
      city.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setMatchingCities(matchingCities);
  };

  const handleSuggestionClick = (city) => {
    setSelectedCity(city);
    setSearchValue(city.name);
    setMatchingCities([]);
    setActiveTab('places');
  };

  const handleSearch = () => {
    const matchingCity = citiesData.find(
      (city) => city.name.toLowerCase() === searchValue.toLowerCase()
    );

    if (matchingCity) {
      setSelectedCity(matchingCity);
      setActiveTab('places');
    } else {
      alert('City not found!');
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getPageStyle = () => {
    if (selectedCity && selectedCity.backgroundUrl) {
      return {
        backgroundImage: `url(${selectedCity.backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      };
    } else {
      return {};
    }
  };

  return (
    <div style={getPageStyle()} className="app-container">
      <div className="app-overlay">
        <div className="header">
          <h1 id="city-title">{selectedCity ? selectedCity.name : 'City not found'}</h1>
          <div className="search-container">
            <div className="search-input">
              <input
                type="text"
                id="search-input"
                placeholder="Search for cities"
                value={searchValue}
                onChange={handleCityInput}
              />
              <button id="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          <div id="suggestions">
            {matchingCities.map((city) => (
              <div key={city.id} onClick={() => handleSuggestionClick(city)}>
                {city.name}
              </div>
            ))}
          </div>
        </div>
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'places' ? 'active' : ''}`}
            onClick={() => handleTabClick('places')}
          >
            PLACES
          </div>
          <div
            className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
            onClick={() => handleTabClick('hotels')}
          >
            HOTELS
          </div>
          <div
            className={`tab ${activeTab === 'restaurants' ? 'active' : ''}`}
            onClick={() => handleTabClick('restaurants')}
          >
            RESTAURANTS
          </div>
          <div
            className={`tab ${activeTab === 'offices' ? 'active' : ''}`}
            onClick={() => handleTabClick('offices')}
          >
            OFFICES
          </div>
        </div>
        <div id="content" className={`items-container ${activeTab}`}>
          {selectedCity && selectedCity.categories[activeTab].map((item) => (
            <div key={item.id} className="item">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="item-image"
                />
              )}
              <div className="item-details">
                <h2>{item.name}</h2>
                <p className="rating">Rating: {item.rating}</p>
                {item.entryFee && <p>Entry Fee: {item.entryFee}</p>}
                <p>Description: {item.desc}</p>
                {item.openAt && <p>Opens at: {item.openAt}</p>}
                {item.closeAt && <p>Closes at: {item.closeAt}</p>}
                {item.address && <p>Address: {item.address}</p>}
                {item.price && <p>Price: {item.price}</p>}
                {item.checkIn && <p>Check-in: {item.checkIn}</p>}
                {item.checkOut && <p>Check-out: {item.checkOut}</p>}
                {item.cabins && <p>Cabins: {item.cabins}</p>}
                {item.seats && <p>Seats: {item.seats}</p>}
                {item.area && <p>Area: {item.area}</p>}
              </div>
            </div>
          ))}
        </div>
        <div  className="weather-container">
          {weather && (
            <div className="weather">
              <img
                src={weather.imageUrl}
                alt="Weather Icon"
                className="weather-icon"
              />
              <div className="weather-details">
                <p  className="weather-temp">{weather.temp}&deg;C</p>
                <p  className="weather-main">{weather.main}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
