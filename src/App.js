import React from 'react';
const api = {
  key: "b9501911800dab389987a81f0cab2519",
  base: "http://api.openweathermap.org/data/2.5/weather"
}

function App() {

  const [query, setQuery] = React.useState("") ;
  const [weather, setWeather] = React.useState([]) ;
  const [main, setMain] = React.useState({}) ;
  const [data, setData] = React.useState({}) ;

  const search = evt => {
    if (evt.key === "Enter"){ 
      fetch(`${api.base}?q=${query}&units=metric&appid=${api.key}`)
      .then( res => res.json())
      .then( data => {
        setData(data) ;
        setWeather(data.weather) ;
        setMain(data.main) ;
        setQuery("") ;
    }) ;
    }
  } ;

  return (
    <div className={typeof(main) != "undefined" ? (main.temp > 16) ? "App warm" : "App" : "App warm"}>
      <main>
        <div className="search-box">
          <input type="text" placeholder="Faridabad, Haryana, India" className="search-bar" value={query} onChange={e => {setQuery(e.target.value)}} onKeyPress={search} />
        </div>
        <div className="location-box">
          <div className="location">{data.name}</div>
          <div className="date">Today's Weather</div>
        </div>
        <div className="weather-box">
          <div className="tempo">
            {typeof(main) != "undefined" ? `${Math.floor(main.temp)}°` : <p className="ty-lo">No Location Searched !</p>}
          </div>
          <div className="weather">{typeof(weather) != "undefined" ? weather.map(e => e.main) : ""}</div>
        </div>

        {/* <div className="weather-forecast">
          <h1>Forecast</h1>
          <hr />
          <div className="forecasting">
            <li className="li-box">
              <div className="forecast-day">
                DAY1
              </div>
              <div className="forecast-temp">30°</div>
            </li>
            
            <li className="li-box">
              <div className="forecast-day">
                DAY2
              </div>
              <div className="forecast-temp">30°</div>
            </li>
            <li className="li-box">
              <div className="forecast-day">
                DAY3
              </div>
              <div className="forecast-temp">30°</div>
            </li>
            <li className="li-box">
              <div className="forecast-day">
                DAY4
              </div>
              <div className="forecast-temp">30°</div>
            </li>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;