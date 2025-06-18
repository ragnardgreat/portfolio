import { useEffect, useState } from "react";



export default function ImageDisplay(props) {

    const [currImg, setCurrImg] = useState();
    const [currDesc, setCurrDesc] = useState();

    useEffect(() => {
        setCurrImg(0)
    }, [])

    function changeImage() {
        setCurrImg(currImg + 1);
        const length = (props.imgArr.length) - 1;
        if (currImg === length) {
            setCurrImg(0);
            setCurrDesc(0)
        };
    }

    function prevImg() {
        setCurrImg(currImg - 1);
        const length = (props.imgArr.length) - 1;
        if (currImg === 0) {
            setCurrImg(length);
            setCurrDesc(length)
        };
    }


    return (<>
        <img id="pics" src={props.imgArr[currImg]}></img>
        <div className="text">{props.descArr[currImg]}</div>
        <div id="buttons">
            <button id="prev" className="button prev" onClick={() => { prevImg() }}>{"<"}</button>
            <button id="next" className="button next" onClick={() => { changeImage() }}>{">"}</button>
        </div>
    </>)



}