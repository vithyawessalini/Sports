import React, { useState, useEffect } from 'react';
import Fside from '../components/Fside';
import Fhead from '../components/Fhead';
import {BASE_URL} from '../config';
function Fteams() {
  const [playersByTeams, setPlayersByTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([]);

  useEffect(() => {
    // Fetch players grouped by teams and sports from the server
    fetch(`${ BASE_URL }/get-players-by-teams`)
      .then((response) => response.json())
      .then((data) => setPlayersByTeams(data))
      .catch((error) => console.error(error));
  }, []);

  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId);

    // Find the selected team's players from the fetched data
    const teamData = playersByTeams.find((teamData) => teamData._id.team === teamId);
    if (teamData) {
      setSelectedTeamPlayers(teamData.players);
    } else {
      setSelectedTeamPlayers([]);
    }
  };

  return (
    <div className="app">
      <Fside />
        <div className="app-main">
       <Fhead />
       <div className="teamd">
          <div className="teamdetails">
      <h1 style={{fontFamily: "Footlight MT Light"}}>All Teams</h1>
      <div className="teams-container">
        <div className="teams-list">
        <div>
          {playersByTeams.map((teamData) => (
            <div key={teamData._id.team} onClick={() => handleTeamSelect(teamData._id.team)} className="team-item">
              {teamData._id.team} 
            </div>
          ))}
        </div></div>
        <div className="selected-team">
        {selectedTeam && (
          <div>
            <h3>
              Players of {selectedTeam} 
            </h3>
            
            <h3>Players:</h3>
                  <ul>
                {selectedTeamPlayers.map((player) => (
                  <li key={player._id}>
                    <strong>Name:</strong>{player.firstName} {player.lastName}<br />
                  </li>
                ))}
              </ul>
          </div>
        )}
      </div></div></div></div>
    </div></div>
  );
}

export default Fteams;
