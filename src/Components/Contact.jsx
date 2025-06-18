

export default function Contact() {



    return (<>
        <div id="contactTitle" className="title">Contact Me:</div>
        <div id="contactContainer">
            <button onClick={() => { window.open("https://www.linkedin.com/in/roland-piperal-932a4a347/") }}><div id="linkedin" className="contact">LinkedIn<img width="80px" src="LI-In-Bug.png"></img></div></button><br></br>
            <button id="githubButton" onClick={() => { window.open("https://github.com/ragnardgreat") }}><div id="gitHub" className="contact">GitHub<img alt="image10" width="80px" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img></div></button>
            <div id="email" className="contact">Email:<br></br> <h1>roland.piperal123@gmail.com</h1></div>
        </div>

    </>)
}