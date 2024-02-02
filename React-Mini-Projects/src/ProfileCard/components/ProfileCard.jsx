import profilePicture from "../assets/profilePicture.jpg"
import coverPhoto from "../assets/cover-2.jpg";
import "./ProfileCard.css"

export function ProfileCard() {
    const profile = {
        coverPicture: coverPhoto,
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
            <CoverBackground image={profile.coverPicture} />
            <ProfilePicture profilePicture={profile.profilePicture}/>
            <NameAndAge name={profile.name} age={profile.age} />
            <Location location={profile.location} />
            <div className="profile-numbers">
                <Tile num={profile.profileStats.followers} label="Followers"/>
                <Tile num={profile.profileStats.likes} label="Likes"/>
                <Tile num={profile.profileStats.photos} label="Photos"/>
            </div>
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

function NameAndAge({name, age}) {
    return(
        <div className="nameAndAge">
            <b>
                <p className="name">{name}</p>
            </b>
            <p className="age">{age}</p>
        </div>
    )
}

function Location({location}) {
    return(
    <div className="location-div">
        <p className="location">{location}</p>
    </div>
    )
}

function Tile({num, label}) {
    function calcNum(num) {
        if(num < 1000) {
            return num.toString();
        }
        else {
            return ((num/1000).toFixed(1)).toString() + "K";
        }
    }
    return(
        <div className="tile-num">
            <b>
                <p className="num">{calcNum(num)}</p>
            </b>
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