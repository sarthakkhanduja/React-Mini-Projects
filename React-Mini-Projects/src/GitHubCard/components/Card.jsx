import { useState, useEffect } from "react";

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
        const username = "sarthakkhanduja"
        fetchGithubData(username);
    }, [])

    return(
        <div className="card-div">
            <ProfilePicture profilePicture={data.avatar_url} />
            <Member login={data.login} created={data.created_at} />
            <Tile data={data.public_repo} label="Repositories" />
        </div>
    )
}

function ProfilePicture({profilePicture}) {
    return(
    <div className="profile-picture-div">
        <img className="profile-picture" src={profilePicture} alt="Profile Picture" />
    </div>
    )
}

function Member({login, created}) {
    return(
        <div className="member-div">
            <p className="username">{login}</p>
            <p className="memberSince">{created}</p>
        </div>
    )
}

function Tile({data, label}) {
    return(
        <div className="profile-numbers">
            <p className="repo">{data}</p>
            <p className="label">{label}</p>
        </div>
    )
}