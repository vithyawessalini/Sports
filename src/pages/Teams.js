import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';

function Teams() {
  const [playersByTeams, setPlayersByTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([]);

  useEffect(() => {
    // Fetch players grouped by teams and sports from the server
    fetch('/get-players-by-teams')
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
      <Sidebar />
      <div className="app-main">
        <Header />
        <h2 style={{fontFamily: "Footlight MT Light"}}>Teams</h2>
        <ul>
          {playersByTeams.map((teamData) => (
            <li key={teamData._id.team} onClick={() => handleTeamSelect(teamData._id.team)}>
              {teamData._id.team} 
            </li>
          ))}
        </ul>
        {selectedTeam && (
          <div>
            <h3>
              Players of {selectedTeam} 
            </h3>
            <table className="player-table">
              <thead>
                <tr>
                  <th className="player-id-header">Player ID</th>
                  <th>Player Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {selectedTeamPlayers.map((player) => (
                  <tr key={player._id}>
                    <td>{player.id}</td>
                    <td>{player.firstName} {player.lastName}</td>
                    <td>{player.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Teams;
