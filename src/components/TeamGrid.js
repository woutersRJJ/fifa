import TeamCard from "./TeamCard";

const TeamGrid = ({teams}) => {
    return (<div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '20px',
        padding: '20px'
    }}> {teams.map((team, index) => (
        <TeamCard key={index} team={team}/>))}
    </div>);
};

export default TeamGrid;