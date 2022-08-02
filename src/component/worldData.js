import React, { useState, useEffect } from "react";
import axios from "axios";
import mainImg from "../images/130-COVID-Virus.png";
import doctorImg from "../images/doctor-man.svg";
import "bootstrap/dist/css/bootstrap.css";
import wearMask from"../images/129-wear-mask.png";
import washHands from "../images/125-wash-hand.png";
import namaste from "../images/126-namaste-no-hand-shake.png";
import workFromHome from "../images/122-work-from-home-2.png";
import { Link } from "react-router-dom";


export const WorldData = () => {
  const [stateData, setStateData] = useState([]);
  const [confirm, setConfirm] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [currCountry, setCurrCountry] = useState("");
  const [newConfirm, setNewConfirm] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [newRecovered, setNewRecovered] = useState(0);

  var date = new Date();
  console.log(date)

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

  const handleData = (e) => {
    console.log(e.target.value, "rttr");
    setCurrCountry(e.target.value);
    stateData.map((data) => {
      return data.Country == e.target.value
        ? (setConfirm(data.TotalConfirmed),
          setDeaths(data.TotalDeaths),
          setRecovered(data.TotalRecovered),
          setNewConfirm(data.NewConfirmed),
          setNewDeaths(data.NewDeaths),
          setNewRecovered(data.NewRecovered)
          )
        : console.log("error occur");
    });
  };

  return (
    <>
      <div className="main_heading_covid">
        <h1>World Covid 19 Data App</h1>
        <Link to='/bitbucketApi'>For USA Covid Data</Link>

      </div>

      <section id="main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" id="left">
              <h1>Stay home, stay save from COVID-19</h1>
              <hr width="40%" />
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a newly discovered coronavirus. Protect yourself and others
                around you by knowing the facts and taking appropriate
                precautions
              </p>
            </div>
            <div className="col-lg-6">
              <img src={mainImg} alt="" id="covid-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="importance-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" id="left">
              <img src={doctorImg} alt="" id="doctor-img" />
            </div>
            <div className="col-lg-6">
              <h1 id="importace-heading">
                WHY it is important to{" "}
                <label id="home-lable">stay at home?</label>
              </h1>
              <hr width="40%" />

              <div>
                <p>
                  <span for="" className="count">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                  </span>
                  Covid-19 is the fasted growing pandamic the number of corona
                  confirmed cases worldwide has exceeded 1 crore due to rapid
                  spreading of the virus
                </p>
                <p>
                  <span for="" className="count">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                  </span>
                  Covid-19 easily than any other viruses.
                </p>
                <p>
                  <span for="" className="count">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                  </span>
                  The main way COVID-19 spreads is from person-to-person
                  contact. “Contact” is more than touching. When someone coughs
                  or sneezes near you, droplets from their nose and mouth go
                  into the air.
                </p>
                <p>
                  <span for="" className="count">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                  </span>
                  Droplets from a person with COVID-19 have the virus in them.
                  If you breathe the droplets in, the virus gets into your
                  system.
                </p>
                <p>
                  <span for="" className="count">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                  </span>
                  To protect yourself, you should practice social distancing.
                  This includes staying at least 6 feet away from other people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="parent_main_section">
            <h2>TRACK COVID-19 HERE</h2>
            <p>You can check statistics of COVID-19 cases here.</p>
            

            <div>
            <span>
              {" "}
              <label>Country</label>
              <select onChange={handleData}>
                {stateData.map((data, key) => {
                  return <option key={key}>{data.Country} </option>;
                })}
              </select>
            </span>
            </div>
            {console.log(currCountry, "currCountry")}
                
            <div className="main_date_section">
              {/* <p>{`${date.getDate()} + "-" + ${date.getMonth} + "-" + ${date.getFullYear}`}
              </p> */}
              <p>{date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</p>
              </div>



            <div className="row">
                <div className="Cases">
                  <div className="col-lg-6 col-md-12 col-sm-12">
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
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="main_cases">
                      <div>
                        <h2>New Confirmed</h2>
                        <label>{newConfirm}</label>
                      </div>

                      <div>
                        <h2>New Deaths</h2>
                        <label>{newDeaths}</label>
                      </div>

                      <div>
                        <h2>New Recovered</h2>
                        <label>{newRecovered}</label>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>


      <section id="precautions" class="mt-4 container py-4">
        <h1 className="text-center mt-4 text-uppercase">How to save from covid-19?</h1>
        <hr width="20%" className="m-auto" />
        <div className="row text-center mt-4">
            <div class="col-lg-3 col-md-6 col-sm-6 precaution-box">
                <div className="rounded shadow p-2">
                    <img src={wearMask} alt="" className="precautions-icon" />
                    <h3>Wear Mask</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="rounded shadow p-2">
                    <img src={washHands} alt="" className="precautions-icon" />
                    <h3>Wash Hands</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div class="rounded shadow p-2">
                    <img src={namaste} alt="" className="precautions-icon" />
                    <h3>No Handshake</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="rounded shadow p-2">
                    <img src={workFromHome} alt="" className="precautions-icon" />
                    <h3>Work at home</h3>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};
