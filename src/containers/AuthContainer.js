import React from 'react'
import {connect} from 'react-redux'

class AuthContainer extends React.Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { user: state.user }
}

export default connect(mapStateToProps)(AuthContainer)