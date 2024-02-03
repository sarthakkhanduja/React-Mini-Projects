import "./InputBar.css"
import iconPicture from "../assets/github-mark-white.png";

export function InputBar() {
    return(
        <div className="inputDiv">
            <div className="input-box-div">
                <img className="icon" src={iconPicture} />
                <input className="input-box" id="input-box" type="text" placeholder="GitHub Username"></input>
            </div>
            <button className="generate-button">Generate</button>
        </div>
    )
}