import { useState } from "react";


const apiWeather = {
    key:'92323738145c651469605ea6c6a07015',
    baseUrl:'https://api.openweathermap.org/data/2.5/'
  }
  

const Search = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState ({});

    const buttonPressed = () => {
        console.log("Button click")
      fetch(`${apiWeather.baseUrl}weather?q=${search}&units=metric&APPID=${apiWeather.key}`)
        .then((res) => res.json())
        .then((result) => {
        setWeather(result);
      });

    }

    return ( 
     <div className="searchPage">
        <div className="container">
            <div className="searchField">
                <input 
                    type="text" 
                    placeholder="Your location..."
                    value={ search }
                    onChange= {(e) => setSearch(e.target.value)}
                />
                <button onClick={ buttonPressed }>Check</button>
            </div>
            <div className="currentWeather">   
                <h1> { weather.name }</h1>
                <h1>{ weather.main.temp }</h1>
            </div> 
        </div>  
    </div>
     );
}
 
export default Search;