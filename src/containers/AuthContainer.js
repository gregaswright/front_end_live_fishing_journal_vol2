import React from 'react'
import LoginForm from '../component/LoginForm'
import {connect} from 'react-redux'

class AuthContainer extends React.Component {

    loginHandler = (userInfo) => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({ user: userInfo}),
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            this.setState({ user: data.user }, () => this.props.history.push("/map"))
            
        })
    }


    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { user: state.user }
}

export default connect(mapStateToProps)(AuthContainer)