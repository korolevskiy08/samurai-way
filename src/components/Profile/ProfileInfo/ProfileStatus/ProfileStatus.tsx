import { Component } from 'react'

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusType> {
  state = {
    editMode: false,
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
    // this.props.updateStatus()
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={this.props.status}
              onBlur={this.deaActivateEditMode.bind(this)}
              autoFocus
            />
          </div>
        )}
      </>
    )
  }
}
