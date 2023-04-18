import { useEffect, useState } from "react";
import "./main.css"
import SummarizedTable from "../../../components/standings/SummaryTable";
import defaultSummarizedTableRow from "../../../data/default/default_summary_table";


const RightDiv = () => {

    const league = "premier_league";
    const [standings, setStandings] = useState([{
      "header": [""],
      "description": [""],
      "standings": [defaultSummarizedTableRow],
      "league": ""
    }])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/standings/2023?table_type=summary`)
        .then(response => response.json())
        .then(data => setStandings(data));
        }, [league]);
    return (
        <div id="right">
            {standings.map((standings) => (
                <div>
                    <SummarizedTable 
                    header={standings.header} 
                    standings={standings.standings} 
                    description={standings.description}
                    league={standings.league}/>
                </div>
            ))}
                
        </div>
    )
}


export default RightDiv;