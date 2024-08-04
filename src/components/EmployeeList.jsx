import React from 'react';

function EmployeeList({ employees, addToTeam }) {
  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id} style={{ color: emp.disabled ? 'grey' : 'black' }}>
            {emp.name} ({emp.age} years)
            <button onClick={() => addToTeam(emp.id)} disabled={emp.disabled}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
