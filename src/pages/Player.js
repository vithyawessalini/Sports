import React, { useState, useEffect } from 'react';
import PlayerList from '../components/Playerlist';
import PlayerDetails from '../components/Playerdetails';
import Page from '../components/Page';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import teamsData from '../json/team.json';
function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const allPlayers = teamsData.flatMap((team) => team.players);
    setPlayers(allPlayers);
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="app-main">
        <Header />
        <div>
          <Page title="Players list"style={{fontFamily: "Footlight MT Light"}} />
          <PlayerList players={players} onRowClick={handlePlayerClick} selectedPlayer={selectedPlayer} />
          {selectedPlayer && <PlayerDetails player={selectedPlayer} />}
        </div>
      </div>
    </div>
  );
}

export default Players;
