
function CurrentWeather({city, setCity,search, weather}) {
    return (
        <div className>
          <input type = "text" className ="search-box" onChange = {e => setCity(e.target.value)} value = {city} onKeyPress = {search} className ="search-bar" placeholder = "search" >
          </input>
           <p>{weather.ide}</p>    
        </div>
    )
}

export default CurrentWeather;
