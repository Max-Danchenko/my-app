import React from "react";
import Styles from "./Profile.module.css"


const Profile = () => {
    return (
        <div>
            <a href="#"><img src={require("../SideImages/profile_icon.jpg")} alt="" className={Styles.profiles}/></a>
            <h1 className={Styles.names}>Every<br/> Interaction</h1>
            <a href="#"><p className={Styles.subname}>@EveryInteraction</p></a>
        </div>
    )
};

export default Profile;