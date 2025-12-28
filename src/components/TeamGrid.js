import TeamCard from "./TeamCard";
import {useState} from "react";
import InputModal from "./InputModal";
import {firestoreDatabase} from "../services/firestore";
import {FaPlus} from "react-icons/fa";

const TeamGrid = ({teams,setTeams}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [teamData, setTeamData] = useState(null);

    async function addTeamToDatabase(team) {
        if (!firestoreDatabase) return

        const newTeam = await firestoreDatabase.collection("teams").add(team);
    }

    const handleUserSubmit = (data) => {
        setTeamData(data);
        console.log("Team entered:", data);
        addTeamToDatabase(data).then(r => console.log('Successfully added!'));
        setTeams([...teams,data].sort((a, b) => a.country.localeCompare(b.country)));
    };

    return (
        <>
            <div>
                <h1>FIFA 2026 World Cup</h1>
                <h2>{teams.length} Deelnemende landen</h2>
                <FaPlus onClick={() => setModalOpen(true)}></FaPlus>
                <InputModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleUserSubmit}/>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}> {teams.map((team, index) => (
                <TeamCard key={index} team={team}/>))}
            </div>
        </>);
};

export default TeamGrid;