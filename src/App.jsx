import "./App.css";
import "./utils/consts.js";
import { BASE_URL } from "./utils/consts.js";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  async function getEtudiant() {
    const req = await fetch(`${BASE_URL}/etudiants`);
    const body = await req.json();
    setStudents(body);
    console.log(students);
  }

  return (
    <>
      <div className="button-list">
        <button type="button" onClick={getEtudiant}>
          Liste etudiants
        </button>
        <button>Button 2 </button>
        <button>Button 3 </button>
        <button>Button 4 </button>
      </div>
      <div>
        <ul>
          {students.map((student) => (
            <li key={student["CIN"]["value"]}>{student["NAME"].value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
