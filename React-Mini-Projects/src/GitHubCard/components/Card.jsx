import { useState, useEffect } from "react";
import "./Card.css"
import coverPhoto from "../assets/github-cover.png"
import { useCallback } from "react";

export function Card(props) {    
    useEffect(() => {
        props.fetchGithubData(props.data.login);
    }, [])

    const formatDateInWords = useCallback(function (timestamp) {
        if (!timestamp || typeof timestamp !== 'string') {
          return '';
        }
      
        let date = new Date(timestamp);
        if (isNaN(date.getTime())) {
          // Invalid date
          return '';
        }
      
        let day = date.getDate();
        let year = date.getFullYear();
        let monthInWords = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
      
        let dayWithSuffix = day.toString();
      
        if (day == "1" || day == "21" || day == "31") {
          dayWithSuffix += "st";
        } else if (day == "2" || day == "22") {
          dayWithSuffix += "nd";
        } else if (day == "3" || day == "23") {
          dayWithSuffix += "rd";
        } else {
          dayWithSuffix += "th";
        }
      
        return `${dayWithSuffix} ${monthInWords}, ${year}`;
      }, []);
      
    
    const formattedCreated = formatDateInWords(props.data.created_at);

    // console.log(props.data.name);
    return(
        // <div className="card-div" style={{ backgroundImage: `url(${coverPhoto})`}}>
        <div className="card-div">
            <CoverBackground image={coverPhoto} />
            <div className="bottom-div">
            <ProfilePicture login={props.data.login} profilePicture={props.data.avatar_url} />
                <div className="right-half">
                    <Member login={props.data.name} created={formattedCreated} />
                    <div className="profile-numbers">
                        <Tile data={props.data.public_repos} label="Repositories" />
                        <Tile data={props.data.followers} label="Followers" />
                        <Tile data={props.data.public_gists} label="Gists" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

function ProfilePicture({login, profilePicture}) {
    const profileUrl = `https://github.com/${login}`;
    // console.log(profileUrl);
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