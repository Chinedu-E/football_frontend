import CenterDiv from "../home/center"
import RightDiv from "../home/right"

const LeaguePage = () => {
    const league = window.location.pathname.split("/")[2]
    console.log(league)
    return (
        <div style={{display: "flex"}}>
            <CenterDiv league={league}/>
            <RightDiv league={league}/>
        </div>
    )
}

export default LeaguePage