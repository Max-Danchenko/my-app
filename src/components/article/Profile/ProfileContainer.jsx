import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-browser-router";
import {getStatus, getUserProfile, updateStatus} from "../../../Redux/profileReducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 11069


        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }



    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,

)(ProfileContainer)
