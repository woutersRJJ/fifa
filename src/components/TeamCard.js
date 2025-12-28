import USA from "../img/USA.png";
import duitsland from "../img/duitsland.png";
import nederland from "../img/nederland.png";
import argentinie from "../img/argentinie.png";
import brazilie from "../img/brazilie.png";
import colombie from "../img/colombie.png";
import mexico from "../img/mexico.png";
import portugal from "../img/portugal.png";
import uruguay from "../img/uruguay.png";
import canada from "../img/canada.png";
import australie from "../img/australie.png";
import ecuador from "../img/ecuador.png";
import algeria from "../img/algeria.png";
import belgie from "../img/belgie.png";
import qatar from "../img/qatar.png";
import schotland from "../img/schotland.png";
import frankrijk from "../img/frankrijk.png";
import engeland from "../img/engeland.png";
import newzealand from "../img/newzealand.png";

const TeamCard = ({team}) => {

    const calculateFgColor=function (country) {
        switch (country) {
            case 'Nieuw Zeeland' || 'New Zealand':
                return '#fff'
            case 'Engeland' || 'engeland' || 'England' || 'england':
                return '#000000';
            case 'Frankrijk' || 'frankrijk' || 'France' || 'france':
                return '#fff';
            case 'USA':
                return '#fff';
            case 'Nederland' || 'nederland' || 'Netherlands' || 'netherlands':
                return '#000000';
            case 'Duitsland' || 'duitsland' || 'Germany' || 'germany':
                return '#fff';
            case 'Brazilië' || 'Brazilie' || 'Brazil' || 'brazil':
                return '#000000';
            case 'Portugal' || 'portugal':
                return '#000000';
            case 'Canada' || 'canada':
                return '#fff';
            case 'Mexico' || 'mexico':
                return '#000000';
            case 'Uruguay' || 'uruguay':
                return '#000000';
            case 'Argentinië' || 'Argentinie' || 'Argentina' || 'argentina':
                return '#000000';
            case 'Colombië' || 'Colombie' || 'Colombia' || 'colombiaa':
                return '#000000';
            case 'Australië' || 'Australie' || 'Australia' || 'australia':
                return '#000000';
            case 'Ecuador' || 'ecuador' :
                return '#000000';
            case 'Algerije' || 'algerije' || 'Algeria' || 'algeria' :
                return '#000000'
            case 'België' || 'belgië' || 'Belgium' || 'belgium' :
                return '#fff';
            case 'Qatar' || 'qatar'  :
                return '#fff';
            case 'Schotland' || 'schotland' || 'Scotland' || 'scotland':
                return '#fff';
            default:
                return null;
        }
    }

    const calculateBgColor=function (country){
        switch(country){
            case 'Nieuw Zeeland' || 'New Zealand':
                return '#000000'
            case 'Engeland' || 'engeland' || 'England' || 'england':
                return '#FFFFFF';
            case 'Frankrijk' || 'frankrijk' || 'France' || 'france':
                return '#00418F';
            case 'USA':
                return '#0326DE';
            case 'Nederland' || 'nederland' || 'Netherlands' || 'netherlands':
                return '#FF7A00';
            case 'Duitsland' || 'duitsland' || 'Germany' || 'germany':
                return '#1F1F1F';
            case 'Brazilië' || 'Brazilie' || 'Brazil' || 'brazil':
                return '#FFCF25';
            case 'Portugal' || 'portugal':
                return '#FF0000';
            case 'Canada' || 'canada':
                return '#D52B1E';
            case 'Mexico' || 'mexico':
                return '#27A550';
            case 'Uruguay' || 'uruguay':
                return '#7EC1FF';
            case 'Argentinië' || 'Argentinie' || 'Argentina' || 'argentina':
                return '#9CC9F2';
            case 'Colombië' || 'Colombie' || 'Colombia' || 'colombiaa':
                return '#FFD600';
            case 'Australië' || 'Australie' || 'Australia' || 'australia':
                return '#FFC100';
            case 'Ecuador' || 'ecuador' :
                return '#FFD600';
            case 'Algerije' || 'algerije' || 'Algeria' || 'algeria' :
                return '#00A067'
            case 'België' || 'belgië' || 'Belgium' || 'belgium' :
                return '#880029';
            case 'Qatar' || 'qatar'  :
                return '#8D1B3D';
            case 'Schotland' || 'schotland' || 'Scotland' || 'scotland':
                return '#1E1C71'
            default:
                return null;
        }
    }

    const calculateImage = function (country){
        switch (country) {
            case 'Nieuw Zeeland' || 'New Zealand':
                return newzealand
            case 'Engeland' || 'engeland' || 'England' || 'england':
                return engeland;
            case 'Frankrijk' || 'frankrijk' || 'France' || 'france':
                return frankrijk;
            case 'USA':
                return USA;
            case 'Nederland':
                return nederland;
            case 'Duitsland' || 'duitsland' || 'Germany' || 'germany':
                return duitsland;
            case 'Brazilië' || 'Brazilie' || 'Brazil' || 'brazil':
                return brazilie;
            case 'Portugal' || 'portugal':
                return portugal;
            case 'Canada' || 'canada':
                return canada;
            case 'Mexico' || 'mexico':
                return mexico;
            case 'Uruguay' || 'uruguay':
                return uruguay;
            case 'Argentinië' || 'Argentinie' || 'Argentina' || 'argentina':
                return argentinie;
            case 'Colombië' || 'Colombie' || 'Colombia' || 'colombia':
                return colombie;
            case 'Australië' || 'Australie' || 'Australia' || 'australia':
                return australie;
            case 'Ecuador' || 'ecuador' :
                return ecuador;
            case 'Algerije' || 'algerije' || 'Algeria' || 'algeria':
                return algeria;
            case 'België' || 'belgië' || 'Belgium' || 'belgium' :
                return belgie;
            case 'Qatar' || 'qatar'  :
                return qatar
            case 'Schotland' || 'schotland' || 'Scotland' || 'scotland':
                return schotland
            default:
                return null;
        }
    }

    return (
        <div style={{
            width: '260px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif',
            background: calculateBgColor(team.country)
        }}>
            <div style={{ height:'150.2px' ,   color: calculateFgColor(team.country), padding: '16px', textAlign: 'center' }}>
                <img src={calculateImage(team.country)} alt={`${team.country} Flag`} style={{ width: '40px', marginBottom: '8px' }} />
                <Host isHost={team.host} fgcolor={calculateFgColor(team.country)}/>
                <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{team.country}</h2>
            </div>

            <div style={{ background: '#FFFFFF',padding: '16px', color: '#333' ,borderTop:'0.5px ridge lightgrey' }}>
                <p><strong>Groep:</strong> {team.stage}</p>
                <p><strong>Wereld ranking:</strong>{team.ranking}</p>
                <p><strong>Deelnames:</strong>{team.participations}</p>
            </div>
        </div>
    );
};

function Host({isHost,fgcolor}){
    if (isHost)
        return <div className="wrapper">
            <div className="box" style={{marginTop:'50px'}}>
                <p style={{textAlign:'left',color: fgcolor }}>Gastland</p>
             </div>
        </div>
    else
        return <div className="wrapper">
            <div className="box" style={{marginTop:'50px'}}>
                <p>&nbsp;</p>
            </div>
    </div>
}
export default TeamCard;
