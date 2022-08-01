import React, { useState, useEffect } from "react";
import axios from "axios";

export const WorldData = () => {
  const [stateData, setStateData] = useState([]);
  const [confirm, setConfirm] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [currCountry, setCurrCountry] = useState("");
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        var currData = res.data;
        console.log(currData.Countries, "currData");
        setStateData(currData.Countries);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

//   useEffect(() => {
//     stateData.map((country) => {
//       return country.Country == currCountry
//         ? setConfirm(country.Country.TotalConfirmed)
//         : console.log("Wrong Country");
//     });
//   }, [currCountry]);

  const handleData = (e) => {
    console.log(e.target.value, 'rttr')
    setCurrCountry(e.target.value)
    stateData.map((data)=> {
        return(
            data.Country == e.target.value ? (
        
                setConfirm(data.TotalConfirmed),
                setDeaths(data.TotalDeaths),
                setRecovered(data.TotalRecovered)
                
            ): (
                console.log('error occur')
            )
        )     
    })
  }

  return (
    <div>
      <h1>World Covid 19 Data App</h1>

      <div className="parent_main_section">
        <h2>TRACK COVID-19 HERE</h2>
        <p>You can check statistics of COVID-19 cases here.</p>
        <span>
          {" "}
          <label>Country</label>
          <select onChange={ handleData}>
            {stateData.map((data, key) => {
              return <option key={key}>{data.Country} </option>;
            })}
          </select>
        </span>
        {console.log(currCountry, "currCountry")}

        <div>
          <div className="Cases">
            <div className="main_total">
              <div>
                <h2>Total Confirmed</h2>
                <label>{confirm}</label>
              </div>

              <div>
                <h2>Total Deaths</h2>
                <label>{deaths}</label>
              </div>

              <div>
                <h2>Total Recovered</h2>
                <label>{recovered}</label>
              </div>
            </div>

            <div className="new_cases">
              <div className="main_cases">
                {/* <div>
                <h2>New Confirmed</h2>
                <span defaultValue={confirm}>0</span>
            </div>
             
            <div>
                <h2>New Deaths</h2>
                <span defaultValue={confirm}>0</span>
            </div>
             
            <div>
                <h2>New Recovered</h2>
                <span defaultValue={confirm}>0</span>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
