import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
import ImageDisplay from './ImageDisplay';
export default function SCL() {

    const myRef = useRef();
    const [vis, setVis] = useState();
    if (vis) {
        const logo1 = document.getElementById("logoContainer");
        const logo2 = document.getElementById("textContainer");
        logo1.style.animationName = "none";
        logo2.style.animationName = "none";
        requestAnimationFrame(() => {
            logo1.style.animationName = "";
            logo2.style.animationName = ""
        })
        logo1.style.animationName = "anim, rotating;"
        logo1.style.animationPlayState = "running";
        logo2.style.animationPlayState = "running";
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVis(entry.isIntersecting);
        })
        observer.observe(myRef.current)

    }, [])




    let imgArr = ["screenshot-2025-06-17-17-47-10.png",
        "screenshot-2025-06-17-17-47-17.png",
        "screenshot-2025-06-17-17-48-01.png",
        "screenshot-2025-06-17-17-48-06.png",
        "screenshot-2025-06-17-17-48-28.png",
        "screenshot-2025-06-17-17-48-25.png",
        "screenshot-2025-06-17-17-48-32.png",
        "screenshot-2025-06-17-17-48-35.png"];
    let descArr = ["Login", "Register", "User Feed", "Navbar on hover", "Edit Profile", "User Posts", "User Search", "Create Post"]

    return (<>
        <div id="contWithPictures">
            <div id="outerContainer">
                <div ref={myRef} id="logoTextContainer">
                    <div id="fullLogo">
                        <div id="logoContainer" >
                            <div id="newLogo">S</div>
                        </div>
                        <div id="textContainer">
                            <div id="newLogoText">CL.</div>
                        </div>
                    </div>
                </div>
                <div id="SCL">
                    <h2 id="builtWith">Built with:
                        JavaScript <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"></img>,
                        React <img alt="image4" width="20px" src="https://icon.icepanel.io/Technology/svg/React.svg"></img>,
                        Node.js <img width="20px" alt="image5" src="https://nodejs.org/static/logos/jsIconGreen.svg"></img>,
                        Express <img alt="image6" width="30px" src="https://img.icons8.com/?size=512&id=SDVmtZ6VBGXt&format=png"></img>,
                        MySQL <img alt="image7" width="30px" src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"></img></h2><br></br>
                    <h1 className="description">Description:<br></br>SCL. is a social media platform where everyone can see your posts<br></br>
                        and you can see everybody elses posts</h1>
                </div>
            </div>
            <div className="pictures"><ImageDisplay imgArr={imgArr} descArr={descArr} /></div>
        </div>
    </>)
}