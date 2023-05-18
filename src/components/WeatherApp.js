import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import { Container, Grid, CircularProgress, Dialog, DialogTitle, DialogContent, TextField, Button} from '@mui/material';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');



  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location) {
        setIsLoading(true);

        try {
          const apiKey = '41042664b8b4a27eacc1e557ab2b6003'
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

          const response = await axios.get(apiUrl);
          const data = response.data;

          if (data.cod === 200) {
            const weatherInfo = {
              location: data.name,
              temperature: data.main.temp,
              description: data.weather[0].description,
              humidity: data.main.humidity,
              feels_like: data.main.feels_like,
            };
            setWeatherData(weatherInfo);
          } else {
            console.log('Error:', data.message);
          }
        } catch (error) {
          console.log('Error:', error);
        }

        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  const handleSearch = (location) => {
    setLocation(location);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = () => {
    if (userName.trim() !== '') {
      setUserName(userName.trim());
    }
  };

 
  return (
    <div>
        <Container maxWidth="sm" sx={{ marginTop: 5 }}>
        <Grid container direction="column"spacing={2}>
            <Grid item>
            <Header />
            </Grid>
            <Grid item>
            <SearchBar onSearch={handleSearch} />
            </Grid>
            <Grid item>
            {isLoading ? (
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                }}
                >
                <CircularProgress />
                </div>
            ) : (
                weatherData && <WeatherCard weatherData={weatherData} />
            )}
            </Grid>
        </Grid>
        
        
        </Container>
    </div>
  );
};

export default WeatherApp;
