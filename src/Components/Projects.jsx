import SCL from "./SCL"
import RealStore from "./RealStore"
import CookieClickerClone from "./CookieClickerClone"

export default function Projects() {



    return (<>
        <div id="projectsContainer">
            <h1 className="title">Projects:</h1>
            <SCL />
            <button className="gitHubBtn" onClick={()=>{window.open("https://github.com/ragnardgreat/scl-app")}}>GitHub <img alt="image10" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img></button>
            <RealStore />
            <button className="gitHubBtn" onClick={()=>{window.open("https://github.com/ragnardgreat/store-app")}}>GitHub <img alt="image10" width="35px" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img></button>
            <CookieClickerClone />
        </div>
    </>)

}