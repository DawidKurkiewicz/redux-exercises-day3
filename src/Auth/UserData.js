import React from 'react'

import { connect } from 'react-redux'
import { inputChangeAction } from '../state/userData'

const UserData = (props) => (
    <div>
        <input
            value={props._userData}
            onChange={props._inputChangeAction} 
            
            />
    </div>
)

const mapStateToProps = state => ({
    _userData: state.userData.text,

})

const mapDispatchToProps = dispatch => ({
    _inputChangeAction: (event) => dispatch(inputChangeAction(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData)