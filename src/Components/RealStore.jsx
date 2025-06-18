import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
import ImageDisplay from './ImageDisplay';

export default function RealStore() {

    const myRef = useRef();
    const [vis, setVis] = useState();
    if (vis) {
        const logo = document.getElementById("logoImg");
        const logoTxt = document.getElementById("logoTxt");
        logo.style.animationName = "none";
        logoTxt.style.animationName = "none";
        requestAnimationFrame(() => {
            logo.style.animationName = "";
            logoTxt.style.animationName = ""
        })
        logo.style.animationPlayState = "running";
        logoTxt.style.animationPlayState = "running";
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVis(entry.isIntersecting);
        })
        observer.observe(myRef.current)

    }, [])



    let imgArr = ["screenshot-2025-06-17-17-54-26.png",
        "screenshot-2025-06-17-17-54-40.png",
        "screenshot-2025-06-17-17-54-44.png",
        "screenshot-2025-06-17-17-54-48.png",
        "screenshot-2025-06-17-17-54-59.png"];
    let descArr = ["Landing Page", "E-Store", "All Users", "Login Page", "Cart"]




    return (<>
        <div id="contWithPictures">
            <div id="realPictures" className="pictures"><ImageDisplay imgArr={imgArr} descArr={descArr} /></div>
            <div ref={myRef} id="realStoreContainer">
                <div id="logoContainerReal">
                    <div id="realLogo">
                        <img id="logoImg" width="150px" src="r-high-resolution-logo-transparent.png"></img><span id="logoTxt">eal</span>
                    </div>
                </div>
                <div id="realDesc">
                    <h2>Built with:<br></br>
                        JavaScript <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"></img>,
                        React <img alt="image4" width="20px" src="https://icon.icepanel.io/Technology/svg/React.svg"></img>,
                        FakeStoreApi
                    </h2><br></br>
                    <h1 className="description">Description:<br></br>Real is a webstore built on the FakeStoreApi.<br></br>You can log in, put items into cart and then checkout.<br></br></h1>
                </div>
            </div>
                <div id="realPicturesMobile" className="pictures"><ImageDisplay imgArr={imgArr} descArr={descArr} /></div>
        </div>
    </>)

}