import axios from "axios";
import "./App.css";
import "./utils/consts.js";
import { BASE_URL } from "./utils/consts.js";
import { useState } from "react";
import DisplaySearchResult from './components/DisplaySearchResult'

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses]= useState([])
  const [nomEtudiant, setNomEtudiant]=useState("")
  const [etudiantResult,SetEtudiantResult]=useState(null)


  
  async function getCourses() {
    const req = await fetch(`${BASE_URL}/Cours`);
    const body = await req.json();
    setCourses(body);
    console.log(courses);
    
  }
  async function getEtudiants() {
    const req = await fetch(`${BASE_URL}/etudiants`);
    const body = await req.json();
    setStudents(body);
    console.log(students);
    
  }

  async function getEtudiant(){
    const {data}=await axios.get(`${BASE_URL}/etudiant/${nomEtudiant}`)
    SetEtudiantResult(data[0])
    console.log(data)
  }
  return (
    <>
        <button type="button" onClick={getEtudiants}>
          Liste etudiants
        </button>

      <div>
        <ul>
          {students.map((student) => (
            <li key={student["CIN"]["value"]}>
              <p><strong>Nom:</strong>{student["NAME"].value} <br/>
              <strong>Email:</strong>{student["EMAIL"].value}<br/> {' '} <strong>CIN</strong> : {student["CIN"].value} </p></li>
          ))}
        </ul>
      </div>
      <input  name="idk"  onChange={(e)=>setNomEtudiant(e.target.value)} value={nomEtudiant}/>
      <button onClick={getEtudiant}>Recherche L'etudiant </button>
      <br></br>
      {etudiantResult&&<DisplaySearchResult etudiantResult={etudiantResult}/>}
        <button onClick={getCourses}>Get courses </button>

        <table width="100%" >
          <tr>
           <th>Course Language</th>
            <th>Documentation Link</th>
            <th>Video Link</th>
          </tr>
          {courses.map(course=>(
            <tr>
            <td>{course["TITLE"].value}</td>
            <td><a href={course["PDF"].value}>{course["PDF"].value}</a></td>
            <td><a href={course["VIDEO"].value}>{course["VIDEO"].value}</a></td>
            </tr>)
          )}
        </table>
        <button centres>Button 4 </button>
    </>

  );
}

export default App;
