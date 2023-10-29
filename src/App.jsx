import axios from "axios";
import "./App.css";
import "./utils/consts.js";
import { BASE_URL } from "./utils/consts.js";
import { useState } from "react";
import DisplaySearchResult from "./components/DisplaySearchResult";

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [nomEtudiant, setNomEtudiant] = useState("");
  const [etudiantResult, SetEtudiantResult] = useState(null);
  const [centers, setCenters] = useState([]);
  const [posts, setPosts] = useState([]);
  const [adminCentres, setAdminCentres] = useState([]);
  const [formationetudiants, setFormationetudiants] = useState([]);
  const [coursposts, setCoursPosts] = useState([]);
  const [centreConferences, setCentreConferences] = useState([]);
  const [etudiantSeminaires, setEtudiantSeminaires] = useState([]);
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

  async function getEtudiant() {
    const { data } = await axios.get(`${BASE_URL}/etudiant/${nomEtudiant}`);
    SetEtudiantResult(data[0]);
    console.log(data);
  }

  async function getCentreFormation() {
    const { data } = await axios.get(`${BASE_URL}/centreformations`);
    setCenters(data);
    console.log(centers);
  }

  async function getPosts() {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    setPosts(data);
    console.log(posts);
  }

  async function getAdmincentre() {
    const { data } = await axios.get(`${BASE_URL}/admincentre`);
    setAdminCentres(data);
    console.log(adminCentres);
  }
  async function getformationEtudiant() {
    const { data } = await axios.get(`${BASE_URL}/formationetu`);
    setFormationetudiants(data);
    console.log(formationetudiants);
  }

  async function getCoursPosts() {
    const { data } = await axios.get(`${BASE_URL}/coursposts`);
    setCoursPosts(data);
    console.log(coursposts);
  }
  getCentreConference;

  async function getCentreConference() {
    const { data } = await axios.get(`${BASE_URL}/centreconference`);
    setCentreConferences(data);
    console.log(centreConferences);
  }

  async function EtudiantParseminaire() {
    const { data } = await axios.get(`${BASE_URL}/etudiantseminaire`);
    setEtudiantSeminaires(data);
    console.log(etudiantSeminaires);
  }
  return (
    <>
    <nav>
     <h1>Your Second Chance is here</h1> 
    </nav>
    <div>
    </div>
      <button type="button" onClick={getEtudiants}>
        Liste etudiants
      </button>
      <div>
        <ul>
          {students.map((student) => (
            <li key={student["CIN"]["value"]}>
              <p>
                <strong>Nom:</strong>
                {student["NAME"].value} <br />
                <strong>Email:</strong>
                {student["EMAIL"].value}
                <br /> <strong>CIN</strong> : {student["CIN"].value}{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <hr/>
      <input
        name="idk"
        onChange={(e) => setNomEtudiant(e.target.value)}
        value={nomEtudiant}
      />
      <button onClick={getEtudiant}>Recherche l`etudiant</button>
      <br></br>
      {etudiantResult && (
        <DisplaySearchResult etudiantResult={etudiantResult} />
      )}
      <br />
      <hr/>
      <button onClick={getCourses}>Get courses </button>
      <br />
      <table width="100%">
        <tr>
          <th>Course Language</th>
          <th>Documentation Link</th>
          <th>Video Link</th>
        </tr>
        {courses.map((course) => (
          <tr key={course["TITLE"].value}>
            <td>{course["TITLE"].value}</td>
            <td>
              <a href={course["PDF"].value}>{course["PDF"].value}</a>
            </td>
            <td>
              <a href={course["VIDEO"].value}>{course["VIDEO"].value}</a>
            </td>
          </tr>
        ))}
      </table>
      <br />
      <hr/>
      <button onClick={getCentreFormation}>
        Liste des centres de formation
      </button>
      <ul>
        {centers.map((center) => (
          <li key={center["CENTRE_DE_FORMATION"].value}>
            <strong>Nom Centre : </strong>
            {center["NAME"].value}
            <br />
            <strong>Adress Centre : </strong> {center["ADRESS"].value}
            <br />
            <strong>Num Tel Centre : </strong> {center["NUMTEL"].value}
            <br />
            <strong>Email Centre : </strong> {center["EMAIL"].value}
            <br />
          </li>
        ))}
      </ul>
      <hr/>
      <button onClick={getPosts}>All posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post["POST_ID"].value}>
            <strong> Post id : </strong> {post["POST_ID"].value}
            <br />
            <strong>Descritpion : </strong> {post["TITLE"].value}
          </li>
        ))}
      </ul>
      <hr/>
      <button onClick={getAdmincentre}>Admin par centre:</button>
      {adminCentres.map((adminCentre) => (
        <p key={adminCentre}>
          <strong>{adminCentre["ADMIN_NAME"].value}</strong> est l`admin du{" "}
          <strong>
            centre : {adminCentre["CENTRE_DE_FORMATION_NAME"].value}
          </strong>
        </p>
      ))}
      <br />
      <br />
      <hr/>
      <button onClick={getformationEtudiant}>
        Etudiants et leur formations:
      </button>
      {formationetudiants.map((formationetudiant) => (
        <p key={formationetudiant["FORMATION_NAME"].value}>
          <strong>{formationetudiant["ETUDIANT_NAME"].value}</strong> practicipe
          a la <strong>{formationetudiant["FORMATION_NAME"].value}</strong>
        </p>
      ))}
      <br />
      <br />
      <hr/>
      <button onClick={getCoursPosts}>Cours et leurs posts</button>
      {coursposts.map((courspost) => (
        <p key={courspost["COURS_NAME"].value}>
          <strong>{courspost["COURS_NAME"].value}</strong> a les postes :{" "}
          <strong>{courspost["POST_NAME"].value}</strong>
        </p>
      ))}
      <br />
      <br />
      <hr/>
      <button onClick={getCentreConference}>
        Conferences et leur centres de formations organisateurs
      </button>
      {centreConferences.map((centreConference) => (
        <p key={centreConference["CENTRE_DE_FORMATION_NAME"].value}>
          <strong> {centreConference["CONFERENCE_NAME"].value} </strong> est
          organisé par :{" "}
          <strong>{centreConference["CENTRE_DE_FORMATION_NAME"].value}</strong>
        </p>
      ))}
      <br />
      <br />
      <hr/>
      <button onClick={EtudiantParseminaire}>
        Etudiant et events auquels ils participent
      </button>
      {etudiantSeminaires.map((etudiantSeminaire) => (
        <p key={etudiantSeminaire["ETUDIANT_NAME"].value}>
          <strong> {etudiantSeminaire["ETUDIANT_NAME"].value}</strong>{" "}
          practicipe a l`event :{" "}
          <strong>{etudiantSeminaire["SEMINAIRE_NAME"].value}</strong>
        </p>
      ))}
    </>
  );
}

export default App;
