import './App.css';
import "./services/firestore"
import TeamGrid from "./components/TeamGrid";
import {firestoreDatabase} from "./services/firestore";
import {useEffect, useState} from "react";

function App() {
    const [teams,setTeams]=useState([])

    useEffect(() => {
        loadTeams();
    }, []);

    async function loadTeams() {
        const result = await firestoreDatabase.collection('teams').orderBy("country", "asc").get();
        setTeams(result.docs.map(doc => ({...doc.data()})));
    }

    return <TeamGrid teams={teams} setTeams={setTeams}/>
}

export default App;
