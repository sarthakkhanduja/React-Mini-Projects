import { useState, useEffect } from "react";
import "./Card.css"

export function Card() {

    const [data, setData] = useState({})
    const fetchGithubData = (username) => {
        console.log(username);
        const URL = `https://api.github.com/users/${username}`;
        console.log(URL);
        fetch(URL)
        .then(async (res) => {
          const json = await res.json();
          setData(json);
        })
        .catch((error) => {
          console.log("Error fetching Data!!")
          console.log(error);
        })
    }
    
    useEffect(() => {
        // const username = "sarthakkhanduja"
        const username = "torvalds"
        fetchGithubData(username);
    }, [])

    return(
        <div className="card-div">
            <ProfilePicture login={data.login} profilePicture={data.avatar_url} />
            <div className="right-half">
                <Member login={data.login} created={data.created_at} />
                <div className="profile-numbers">
                    <Tile data={data.public_repos} label="Repositories" />
                    <Tile data={data.public_repos} label="Repositories" />
                    <Tile data={data.public_repos} label="Repositories" />
                </div>
            </div>
            
        </div>
    )
}

function ProfilePicture({login, profilePicture}) {
    const profileUrl = `https://github.com/${login}`;
    console.log(profileUrl);
    return(
        <div className="profile-picture-div">
            <img className="profile-picture" src={profilePicture} alt="Profile Picture" />
            {/* <a className="login" href={profileUrl} /> */}
            <p className="login">{login}</p>
        </div>
    )
}

function Member({name, created}) {
    return(
        <div className="member-div">
            <p className="name">{name}</p>
            <p className="memberSince">{created}</p>
        </div>
    )
}

function Tile({data, label}) {
    return(
        <div className="tile">
            <p className="repo">{data}</p>
            <p className="label">{label}</p>
        </div>
    )
}