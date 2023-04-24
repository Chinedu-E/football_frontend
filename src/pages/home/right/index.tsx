import { useEffect, useState } from "react";
import "./main.css"
import SummarizedTable from "../../../components/standings/SummaryTable";
import defaultSummarizedTableRow from "../../../data/default/default_summary_table";

type DivProps = {
    league?: string;
}

const RightDiv = (props: DivProps) => {
    const {league} = props;
    const [standings, setStandings] = useState([{
      "header": [""],
      "description": [""],
      "standings": [defaultSummarizedTableRow],
      "league": ""
    }])
    useEffect(() => {
        const url = league ? `https://prem-backend-production.up.railway.app/standings/${league}/2023?table_type=summary`: "https://prem-backend-production.up.railway.app/standings/2023?table_type=summary"
        fetch(url)
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