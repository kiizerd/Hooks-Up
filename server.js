import { useOpenWeather } from 'react-open-weather';
// Set Backend Port
const PORT = 8000
// Import packages
const express = require('express');
const cors    = require('cors');
const axios   = require('axios');
require('dotenv').config()


// Initialize backend server object
const app = express();

app.get('/', (req, res) => {
  res.json('hello there')
});

app.get('/weather', (req, res) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.OPENWEATHER_API_KEY,
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  res.json( { data, isLoading, errorMessage } );
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))