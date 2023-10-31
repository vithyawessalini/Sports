import React from 'react';
function CoachList({ coaches, selectedCoach, onRowClick }) {
  return (
    <div>
      <table className="coach-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>

          </tr>
        </thead>
        <tbody>
          {coaches.map((coach) => (
            <tr
              key={coach.id}
              onClick={() => onRowClick(coach)}
              className={selectedCoach === coach ? 'selected-row' : ''}
            >
              <td>{coach.id}</td>
              <td>{coach.name}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoachList;
