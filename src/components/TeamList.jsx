import React from 'react';

function TeamList({ team, removeFromTeam, sortByAge }) {
  return (
    <div className="team-list">
      <h2>Team</h2>
      <button onClick={sortByAge}>Sort by Age</button>
      <ul>
        {team.map(emp => (
          <li key={emp.id}>
            {emp.name} ({emp.age} years)
            <button onClick={() => removeFromTeam(emp.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
