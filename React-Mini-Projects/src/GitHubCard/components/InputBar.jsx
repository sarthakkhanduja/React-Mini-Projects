import "./InputBar.css"
import { useState } from "react";
import iconPicture from "../assets/github-mark-white.png";

export function InputBar(props) {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }

    const handleClick = () => {
        props.fetchGithubData(username);
    }

    return(
        <div className="inputDiv">
            <div className="input-box-div">
                <img className="icon" src={iconPicture} />
                <input className="input-box" type="text" placeholder="GitHub Username" onChange={handleInputChange} value={username}></input>
            </div>
            <button className="generate-button" onClick={handleClick}>Generate</button>
            {/* <div className="error-msg">
                {username.length == 0 ? <p>
                    Username is empty
                </p> : null}
            </div> */}
        </div>
    )
}