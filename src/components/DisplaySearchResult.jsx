function DisplaySearchResult({etudiantResult}) {
    return (
        <div>
            <ul>
            <li>Name :{etudiantResult['NAME'].value}</li>
            <li> Cin :{etudiantResult['CIN'].value}</li>    
            <li>Email :{etudiantResult['EMAIL'].value}</li>
            <li> Age :{etudiantResult['AGE'].value}</li>
         </ul>
        </div>
    )
}

export default DisplaySearchResult