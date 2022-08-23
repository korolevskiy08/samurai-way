import React, { ChangeEvent } from 'react'
import { Component } from 'react'

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusType> {
  state = {
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
