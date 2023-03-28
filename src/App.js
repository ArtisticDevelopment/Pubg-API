import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   getAPI();
  // }, []);

  // //need to set parts of link to variables to match against local input in Home.js
  // const getAPI = async () => {
  //   const res = await axios.get(
  //     ("https://api.pubg.com/shards/xbox/players?filter[playerNames]=" + ),
  //     {
  //       headers: {
  //         authorization:
  //           "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkNzA4NWJlMC0wNjFlLTAxM2ItNTRlNS0xZGJhZTgyMjUwMWUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjYxMzc1MzE1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImFydHNwdWJnIn0.odUYRCNquK0EXDXJmwgkjq92k4YJZonyN2yrP25_Ah4",

  //         accept: "application/json",
  //       },
  //     }
  //   );

  //   setUser(res.data);
  // };

  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Home exact path="/" element={Home} />
    </div>
  );
};

export default App;
