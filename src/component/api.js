import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


import axios from "axios";
export const BitbucketApi = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then((res) => {
        var covidUs = res.data;
        // console.log(covidUs, "check");

        setCovidData(covidUs);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="main_US_data">
      <h1>Covid Data of United States</h1>
      <Link to='/'>For World Data</Link>
    
        {covidData.map((data, key) => {
          return (
            <div key={key}>
                  <Table striped bordered hover variant="dark">
        <thead>
          <tr className="main_heading">
            <th>Serial No</th>
            <th>States</th>
            <th>Date</th>
            <th>Positive Cases</th>
            <th>Hospitalized</th>
            <th>Negative Cases</th>
            <th>Hospitalized Currently</th>
            <th>Total Test Results</th>
            <th>Recovered</th>
            <th>In Icu Currently</th>
            <th>Death Increase</th>
            <th>On Ventilator Pending</th>
          </tr>
        </thead>
              <tbody>
                <tr>
                  <td>{key}</td>
                  <td>{data.states}</td>
                  <td>{data.date}</td>
                  <td>{data.positive}</td>
                  <td>{data.hospitalized}</td>
                  <td>{data.negative}</td>
                  <td>{data.hospitalizedCurrently}</td>
                  <td>{data.totalTestResults}</td>
                  <td>{data.recovered}</td>
                  <td>{data.inIcuCurrently}</td>
                  <td>{data.deathIncrease}</td>
                  <td>{data.pending}</td>
                </tr>
              </tbody>
              </Table>

            </div>
          );
        })}

    
    </div>
  );
};
