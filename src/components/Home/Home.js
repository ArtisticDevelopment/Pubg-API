import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const [user, setUser] = useState({
    gamertag: "",
    platform: "",
  });

  //deconstruct variables so we don't have to call gamer.-- every time
  let { gamertag, platform } = user;

  //axios request to recieve API data
  const getAPI = async () => {
    await axios
      .get(
        `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${gamertag}`,
        {
          headers: {
            authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkNzA4NWJlMC0wNjFlLTAxM2ItNTRlNS0xZGJhZTgyMjUwMWUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjYxMzc1MzE1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImFydHNwdWJnIn0.odUYRCNquK0EXDXJmwgkjq92k4YJZonyN2yrP25_Ah4",

            accept: "application/json",
          },
        }
      )
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //sets user to data and console logs
    console.log(user);
  };

  const onSubmit = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    getAPI();
    setUser({ user: "", platform: "" });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <main>
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
            <select onChange={(e) => onChange(e)}>
              <option placeholder="platform"></option>
              <option value={"Xbox"}>Xbox</option>
              <option value={"Playstion"}>PlayStation</option>
            </select>
          </label>
          <input id="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
};

export default Home;