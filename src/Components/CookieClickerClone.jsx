import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';

export default function CookieClickerClone() {
    const myRef = useRef();
    const [vis, setVis] = useState();
    if (vis) {
        console.log(vis)
        const logo1 = document.getElementById("cookieTitle");
        const c1 = document.getElementById("c1");
        const c2 = document.getElementById("c2");
        const c3 = document.getElementById("c3");
        const c15 = document.getElementById("c15");
        const c25 = document.getElementById("c25");
        const c35 = document.getElementById("c35");

        c1.style.animationName = "none";
        c2.style.animationName = "none";
        c3.style.animationName = "none";
        c15.style.animationName = "none";
        c25.style.animationName = "none";
        c35.style.animationName = "none";
        logo1.style.animationName = "none";
        requestAnimationFrame(() => {
            c1.style.animationName = "";
            c2.style.animationName = "";
            c3.style.animationName = "";
            c15.style.animationName = "";
            c25.style.animationName = "";
            c35.style.animationName = "";
            logo1.style.animationName = "";
        })
        logo1.style.animationPlayState = "running";
        c1.style.animationPlayState = "running";
        c2.style.animationPlayState = "running";
        c3.style.animationPlayState = "running";
        c15.style.animationPlayState = "running";
        c25.style.animationPlayState = "running";
        c35.style.animationPlayState = "running";
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVis(entry.isIntersecting);
        })
        observer.observe(myRef.current)

    }, [])

    return (<>
        <div ref={myRef} id="cookieContainer">
            <div id="logoPlayButton">
                <div id="cookieLogoContainer">
                    <h1 id="cookieTitle"><span id="c1">C</span><span id="c15">ookie</span> <span id="c2">C</span><span id="c25">licker</span> <span id="c3">C</span><span id="c35">lone</span></h1>
                    <div><button id="playButton" onClick={() => { window.open("https://codepen.io/bpttmafm-the-builder/pen/Jjggbrq") }} >Play</button></div>
                </div>
            </div>
            <div id="cookieDesc">
                <h2>Built with:<br></br>
                    JavaScript <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"></img>,
                    CSS <img width="20px" alt="image2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>,
                    HTML <img width="20px" alt="image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png" />
                </h2>
                <h1 className="description">Description:<br></br>A "Cookie Clicker" clone game built only with JavaScript, CSS and HTML.<br></br>The game includes achievements, upgrades and more</h1>
            </div>
        </div>
    </>)
}