import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [team, setTeam] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeeAge, setNewEmployeeAge] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    if (newEmployeeName && newEmployeeAge) {
      const newEmployee = {
        id: employees.length + 1,
        name: newEmployeeName,
        age: parseInt(newEmployeeAge),
        disabled: false
      };
      setEmployees([...employees, newEmployee]);
      setNewEmployeeName("");
      setNewEmployeeAge("");
    }
  };

  const addToTeam = (id) => {
    const employee = employees.find(emp => emp.id === id);
    setTeam([...team, employee]);
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, disabled: true } : emp));
  };

  const removeFromTeam = (id) => {
    setTeam(team.filter(emp => emp.id !== id));
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, disabled: false } : emp));
  };

  const sortByAge = () => {
    setTeam([...team].sort((a, b) => a.age - b.age));
  };

  const averageAge = team.length > 0 ? (team.reduce((acc, curr) => acc + curr.age, 0) / team.length).toFixed(2) : 0;

  return (
    <div className="App">
      <h1>Employee Team Manager</h1>
      <form onSubmit={addEmployee}>
        <input
          type="text"
          placeholder="Employee Name"
          value={newEmployeeName}
          onChange={(e) => setNewEmployeeName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Employee Age"
          value={newEmployeeAge}
          onChange={(e) => setNewEmployeeAge(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
      <div className="lists-container">
        <EmployeeList employees={employees} addToTeam={addToTeam} />
        <TeamList team={team} removeFromTeam={removeFromTeam} sortByAge={sortByAge} />
      </div>
      <h2>Average Age: {averageAge}</h2>
    </div>
  );
}

export default App;
