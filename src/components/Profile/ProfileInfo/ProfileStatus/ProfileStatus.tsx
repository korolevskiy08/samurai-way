import React, { ChangeEvent } from 'react'
import { Component } from 'react'

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

type localStateType = {
  editMode: boolean
  status: string
}

export class ProfileStatus extends Component<ProfileStatusType> {
  state: localStateType = {
    editMode: false,
    status: this.props.status,
  }
  activateEditMode() {
    this.setState({
      editMode: true,
    })
  }
  deaActivateEditMode() {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  componentDidUpdate(prevProps: ProfileStatusType, prevState: localStateType) {
    console.log(prevState)
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.state.status,
      })
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || 'No status'}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              type="text"
              value={this.state.status}
              onBlur={this.deaActivateEditMode.bind(this)}
              autoFocus
            />
          </div>
        )}
      </>
    )
  }
}
