import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, getAssignments } from '../actions/global-actions'

class Overview extends React.Component {
    componentDidMount() {
        if (!this.props.global.currentUser) {
            this.props.getCurrentUser()
        }

        this.props.getAssignments()
    }

    render() {
        const { global } = this.props
        return (
            <div>
                <h1>Overview</h1>
                <h2>Current user</h2>
                <div>
                    {global.currentUser &&
                        <React.Fragment>
                            <div>{global.currentUser.firstName} - {global.currentUser.lastName}</div>
                            <div>{global.currentUser.email}</div>
                        </React.Fragment>
                    }
                </div>
                <h2>Assignments</h2>
                <div>
                    {global.currentUser &&
                        <React.Fragment>
                            {global.assignments.map((assignment, i) => (
                                <div key={i}>
                                    <div>Title: {assignment.title}</div>
                                    <div>description: {assignment.description}</div>
                                </div>
                            ))}
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})
const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(getCurrentUser()),
    getAssignments: () => dispatch(getAssignments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)