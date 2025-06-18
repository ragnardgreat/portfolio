
export default function Skills() {


    return (<>

        <div id="frontend">
            <h1 id="skillsTitle" className="title">Skills</h1><br></br>
            <h1>Front-End</h1>
            <div className="images">
                <div className="item"></div>
                <div className="item">
                    <img alt="image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png" />
                    <p className="skillName">Html</p>
                </div>
                <div className="item">
                    <img alt="image2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>
                    <p>Css</p>
                </div>
                <div className="item">
                    <img alt="image3" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"></img>
                    <p>JavaScript</p>
                </div>
                <div className="item">
                    <img alt="image4" src="https://icon.icepanel.io/Technology/svg/React.svg"></img>
                    <p>React</p>
                </div>
            </div><br></br>
            <hr></hr>
            <div id="backend">
                <h1>Back-End</h1>
                <div className="images">
                    <div className="item">
                        <img alt="image5" src="https://nodejs.org/static/logos/jsIconGreen.svg"></img>
                        <p>Node.js</p>
                    </div>
                    <div className="item">
                        <img alt="image6" src="https://img.icons8.com/?size=512&id=SDVmtZ6VBGXt&format=png"></img>
                        <p>Express</p>
                    </div>
                </div>
            </div><br></br>
            <hr></hr>
            <div id="misc.">
                <h1>Miscellaneous</h1>
                <div className="images">
                    <div id="item">
                        <img alt="image7" src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"></img>
                        <p>MySQL</p>
                    </div>
                    <div id="item">
                        <img alt="image8" src="https://logosandtypes.com/wp-content/uploads/2020/11/npm.svg"></img>
                        <p>NPM</p>
                    </div>
                    <div id="item">
                        <img alt="image9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/97px-Git_icon.svg.png?20220905010122"></img>
                        <p>Git</p>
                    </div>
                    <div id="item">
                        <img alt="image10" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </div>



    </>)
}