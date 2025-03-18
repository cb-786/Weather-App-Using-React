import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1514810771018-276192729582?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon/>;
        if (info.temp > 15) return <WbSunnyIcon/>;
        return <AcUnitIcon/>;
    };

    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        sx={{ height: 140 }} 
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} 
                        title={info.weather}
                        alt={`Weather condition: ${info.weather}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            <p>Temperature = {info.temp}°C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}°C</p>
                            <p>Max Temp = {info.tempMax}°C</p>
                            <p>The weather can be described as <i>{info.weather}</i> </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
