import React from 'react';
import { Sun, Cloud, CloudRain, Wind, Thermometer } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  // In a real app, this would fetch data from a weather API
  const weatherData = {
    current: {
      temp: 72,
      condition: 'Sunny',
      humidity: 45,
      windSpeed: 8,
      icon: Sun,
    },
    forecast: [
      { day: 'Tue', temp: 74, icon: Sun },
      { day: 'Wed', temp: 70, icon: Cloud },
      { day: 'Thu', temp: 68, icon: CloudRain },
      { day: 'Fri', temp: 71, icon: Sun },
    ]
  };

  return (
    <div className="card overflow-hidden">
      <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white p-4">
        <h3 className="font-semibold">Local Weather</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <weatherData.current.icon className="h-10 w-10 mr-2" />
            <div>
              <p className="text-2xl font-bold">{weatherData.current.temp}°F</p>
              <p className="text-sm">{weatherData.current.condition}</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <p className="flex items-center justify-end mb-1">
              <Thermometer className="h-3 w-3 mr-1" /> Humidity: {weatherData.current.humidity}%
            </p>
            <p className="flex items-center justify-end">
              <Wind className="h-3 w-3 mr-1" /> Wind: {weatherData.current.windSpeed} mph
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 bg-white">
        <div className="grid grid-cols-4 gap-2 text-center">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="p-2">
              <p className="text-xs font-medium text-gray-600">{day.day}</p>
              <day.icon className="h-5 w-5 mx-auto my-1 text-gray-700" />
              <p className="text-sm font-medium">{day.temp}°F</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;