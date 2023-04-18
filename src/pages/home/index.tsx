import LeftDiv from "./left"
import RightDiv from "./right"
import CenterDiv from "./center"

const Home = () => {
    return (
        <div style={{display: "flex"}}>
            <CenterDiv/>
            <RightDiv/>
        </div>
    )
}

export default Home