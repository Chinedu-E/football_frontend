import { useEffect, useState } from "react";
import defaultTableRow from "../../data/default/default_table";
import FullTable from "../../components/standings/FullTable";


export default function StandingsPage(){
    const [standings, setStandings] = useState([{
      "header": [""],
      "description": [""],
      "standings": [defaultTableRow],
      "league": ""
    }])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/standings/2023?table_type=full`)
        .then(response => response.json())
        .then(data => setStandings(data));
        }, []);

    return (
        <div>
            {standings.map((standing, i) => (
                <FullTable
                header={standing.header}
                standings={standing.standings} 
                description={standing.description}
                league={standing.league}
                />
            ))}
        </div>
    )
}