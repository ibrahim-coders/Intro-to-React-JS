import { useState } from 'react';

export default function Team() {
  const [team, setTeam] = useState(11);
  const playScourts = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRedius: '15px',
  };

  return (
    <div style={teamStyle}>
      <h3>Players:{team}</h3>
      <button onClick={playScourts}>Players Button</button>
    </div>
  );
}
