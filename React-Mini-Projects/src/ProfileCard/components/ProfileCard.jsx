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
            <p className="name">{name}</p>
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
    // function calcNum({num}) {
    //     if(num < 1000) {
    //         return num.toString();
    //     }
    //     else {
    //         return (num/100).toString() + "K";
    //     }
    // }
    return(
        <div className="tile-num">
            {/* <h4 className="number">{calcNum(num)}</h4> */}
            <p className="number">{num}</p>
            <p>{label}</p>
        </div>
    )
}