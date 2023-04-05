import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import "../GamerData/GamerData";
import GamerData from "../GamerData/GamerData";

const Home = () => {
  const [user, setUser] = useState({
    gamertag: "",
    platform: "",
  });

  //deconstruct variables so we don't have to call gamer.-- every time
  let { gamertag, platform } = user;

  //----------------------------------------------------------------
  //axios request to recieve API data
  const getAPI = async () => {
    const apiKey =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkNzA4NWJlMC0wNjFlLTAxM2ItNTRlNS0xZGJhZTgyMjUwMWUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjYxMzc1MzE1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImFydHNwdWJnIn0.odUYRCNquK0EXDXJmwgkjq92k4YJZonyN2yrP25_Ah4";

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/vnd.api+json",
    };

    //async await handles our .thens in one step
    //fetch() returns a promise that makes you use .then to make into a JSON
    //the JSON returns another promise that you use .then AGAIN to make useable by user
    //try-catch block to avoid .then and .catch
    try {
      const data = await axios.get(
        `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${gamertag}`,
        {
          headers,
        }
      );
      //set deep directory to variable to avoid sphagetti
      const gamerData = data.data.data[0];

      console.log(gamerData);

      console.log(
        "this is our attempt at retrieving specific data " +
          gamerData.attributes.name
      );
      //sets user to data and console logs
      setUser({
        gamertag: gamerData.attributes.name,
        platform: gamerData.attributes.shardID,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  //----------------------------------------------------------------

  //Submit Function
  const onSubmit = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    getAPI();
    console.log(
      "this is the log from Submit " + user.gamertag + " and " + user.platform
    );
    setUser({ gamertag: "", platform: "" });
  };

  //onChange function to change input values in UI
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <main className="main-container">
      <div className="form-wrapper">
        <form className="form-container" onSubmit={(e) => onSubmit(e)}>
          <h2 id="form-header">Enter your gamertag and platform!</h2>
          <label className="form-label" style={{ width: "100%" }}>
            Gamertag:{" "}
            <input
              value={gamertag}
              type="text"
              name="gamertag"
              onChange={(e) => onChange(e)}
            />
          </label>
          <label className="form-label" style={{ width: "100%" }}>
            Platform:
            <select
              name="platform"
              value={platform}
              onChange={(e) => onChange(e)}
            >
              <option placeholder="platform"></option>
              <option value={"xbox"}>Xbox</option>
              <option value={"psn"}>PlayStation</option>
            </select>
          </label>
          <input id="form-submit" type="submit" value="Submit" />
        </form>
      </div>
      <GamerData id="GD-component" user={user} />
    </main>
  );
};

export default Home;
