import "./main.css";
import MobileDrawer from "../../../components/sidebar";

const LeftDiv = () => {
    return (
        <div style={{width: '20%', textAlign: 'center', height: '100%', color: 'white', backgroundColor: 'grey'}}>
            <div id="container" style={{width: '20%', textAlign: 'center', height: '100%', color: 'white', backgroundColor: 'grey'}}>
                <p>My Leagues</p>
                <div id="major">
                    <p>Major Leagues</p>
                    <ol>
                        <li>Premier League</li>
                        <li>La Liga</li>
                        <li>Bundesliga</li>
                        <li>Serie A</li>
                        <li>League </li>
                    </ol>
                </div>
                <div id="others">
                    <p>Other Leagues</p>
                    <ol>
                        <li>Premier League</li>
                        <li>La Liga</li>
                        <li>Bundesliga</li>
                        <li>Serie A</li>
                        <li>League </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}


export default LeftDiv;