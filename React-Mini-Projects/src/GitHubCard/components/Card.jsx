import { useState, useEffect } from "react";
import "./Card.css"
import coverPhoto from "../assets/github-cover.png"

export function Card(props) {    
    useEffect(() => {
        // const username = "sarthakkhanduja"
        // const username = "torvalds"
        props.fetchGithubData(props.data.login);
    }, [])

    // console.log(props.data.name);
    return(
        // <div className="card-div" style={{ backgroundImage: `url(${coverPhoto})`}}>
        <div className="card-div">
            <CoverBackground image={coverPhoto} />
            <div className="bottom-div">
            <ProfilePicture login={props.data.login} profilePicture={props.data.avatar_url} />
                <div className="right-half">
                    <Member login={props.data.name} created={props.data.created_at} />
                    <div className="profile-numbers">
                        <Tile data={props.data.public_repos} label="Repositories" />
                        <Tile data={props.data.public_repos} label="Repositories" />
                        <Tile data={props.data.public_repos} label="Repositories" />
                    </div>
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

function CoverBackground({image}) {
    return(
        <div className="cover-photo-div">
            <img className="cover-picture" src={image} alt="Cover Picture" />
        </div>
    )
}