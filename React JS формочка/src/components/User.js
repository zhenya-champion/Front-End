import React from "react"
import AppUser from "./AppUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
  render(){
    return(
        <div className="user">
            <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() => {
                this.setState({
                editForm: !this.state.editForm
            })
            }} className='edit-icon'/>
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            <img src={this.user.avatar}/>
            <p>{this.user.email}</p>
            <b>{this.user.isHappy ? 'Счастлив:)' : 'Не особо:('}</b>

            
            {this.state.editForm && <AppUser user={this.user} onAdd={this.props.onEdit}/>}
        </div>
    )
  }
}

export default User