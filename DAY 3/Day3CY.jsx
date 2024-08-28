import { useEffect, useState } from "react"
import PropTypes from "prop-types";
const WeatherDetails=({city,temp,condition})=>{
  const detailstyle={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center"
  }
  const tempdet={
    marginTop:"5px"
  }
  const condet={
    marginTop:"20px"
  }
  return(
    <div className="details" style={detailstyle}>
      <div className="location"><h2>Current Weather in {city}</h2></div>
      <div className="temp"  style={tempdet}>Temperature: {temp}°C</div>
      <div className="condition" style={condet}>Condition: {condition}</div>
    </div>
  )
}

export const WeatherApp = () => {
  
  let apikey="ddc859b72a17051948eb6b25c9f40882";
  const [inputtext,setInputtext]=useState("New York");
  const [condition,setCondition]=useState("");
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("New York");
  const [citynotfound,setCitynotfound]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  const search=async()=>{
    setLoading(true);
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputtext}&appid=${apikey}&units=Metric`;
    try{
      let res=await fetch(url);
      let data=await res.json();
      console.log(data);
      if(data.cod==="404"){
        console.error("City not found");
        setCitynotfound(true);
        setError(null);
        setLoading(false);
        return
      }
      else{
        setTemp(Math.floor(data.main.temp));
        setCity(data.name);
        setCondition(data.weather[0].main)
        setError(null);
        setCitynotfound(false)
      }
    }
    catch(error){
      console.error("An error occured: "+error.message);
      setCitynotfound(true);
      setError("An error occured while fetching weather data");
    }
    finally{
      setLoading(false);
    }
  }

  const handletext=(e)=>{
    setInputtext(e.target.value)
  }

  const handlekeydown=(e)=>{
    if(e.key==="Enter")
        search();
    
  }
  
  useEffect(()=>{
    search();
  },[]);
  const bodystyle={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",  
    height: "100vh", 
  }
  const appstyle={
    backgroundColor:"#DFC5FE",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"fit-content",
    margin:"20px",
    padding:"20px",
    borderRadius:"10px",
    textAlign:"center"
  }
  const inputstyle={
    border:"none",
    display:"flex",
    gap:"10px",
    textAlign:"center",
    outline:"none"
  }
  const text={
    border:"1.5px solid grey",
    borderRadius:"2px",
    outline:"none"
  }
  const buttonstyle={
    border:"1.5px solid grey",
    borderRadius:"2px",
    outline:"none"
  }
  return (
    <div className="body" style={bodystyle}>
        <div className='app-container' style={appstyle}>
            <h1>Weather Application</h1>
            <div className='input-container' style={inputstyle}>
                <input type="text" style={text} className='location-input'placeholder='Enter new location' onChange={handletext} onKeyDown={handlekeydown}/>
                <button className='search' style={buttonstyle} onClick={search}>Update Location</button>
            </div>
            {!citynotfound&&!loading&&<WeatherDetails city={city} temp={temp} condition={condition}/>}
            {loading&&<div className="loading-message">Loading...</div>}
            {error&&<div className="error-message">{error}</div>}
            {error==null&&citynotfound&&<div className="city-not-found">City not found</div>}
      </div>
    </div>
    )
}
WeatherDetails.propTypes={
    city:PropTypes.string.isRequired,
    temp:PropTypes.number.isRequired,
    condition:PropTypes.string.isRequired,
}