import profilePicture from "../assets/profilePicture.jpg"
import "./ProfileCard.css"

export function ProfileCard() {
    const profile = {
        profilePicture: profilePicture,
        name: "Sarthak Khanduja",
        age: 25,
        location: "Windsor, ON",
        profileStats: {
            followers: 640,
            likes: 19548,
            photos: 56
        }
    }
    return(
        <div className="profile-div">
            <ProfilePicture profilePicture={profile.profilePicture}/>
            {/* <Name />
            <Location />
            <div className="profile-numbers">
                <Tile />
                <Tile />
                <Tile />.../assets/profilePicture.jpg
            </div> */}
        </div>
    )
}

function ProfilePicture({profilePicture}) {
    return(
        <img className="profile-picture" src={profilePicture} alt="Profile Picture" />
    )
}

function NameAndAge({name, age}) {
    return(
        <div className="nameAndAge">
            <h3 className="name">{name}</h3>
            <h3 className="age">{age}</h3>
        </div>
    )
}

function Location({location}) {
    return(
        <h6 className="location">{location}</h6>
    )
}

function Tile({num}) {
    function calcNum({num}) {

    }
    return(
        <div className="tile-num">
            
        </div>
    )
}