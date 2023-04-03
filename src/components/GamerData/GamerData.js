import React from "react";
import "../GamerData/GamerData.css";

function GamerData(user) {
  return (
    <main>
      <div className="GD-wrapper">
        <div className="GD-container">
          <h2 id="GD-title">GT = {user.gamertag}</h2>
          <div className="GD-info">
            here is where there is where gamerdata will be exposed
          </div>
        </div>
      </div>
    </main>
  );
}

export default GamerData;
