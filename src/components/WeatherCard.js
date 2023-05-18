import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ weatherData }) => {
  const { location, temperature, description, humidity, feels_like } = weatherData;

  // Function to get the animation class based on the weather description
  const getAnimationClass = (weatherDescription) => {
    let animationClass = '';
    if (weatherDescription.includes('rain')) {
      animationClass = 'rain-animation';
    } else if (weatherDescription.includes('cloud')) {
      animationClass = 'cloud-animation';
    } else if (weatherDescription.includes('clear')) {
      animationClass = 'clear-animation';
    }
    return animationClass;
  };

  const animationClass = getAnimationClass(description);

  return (
    <Card
      variant="outlined"
      sx={{ width: 300, margin: '0 auto', animation: animationClass }}
    >
      <CardContent>
        <Typography variant="h3" component="div">
          {location}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Temperature: {temperature}°C
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Description: {description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Humidity: {humidity}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Feels Like: {feels_like}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
