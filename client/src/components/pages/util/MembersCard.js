import React, {Component} from 'react'
import '../styles/CardsStyle.css'

  class MembersCard extends Component{

    state = {
      inputText: ''
    }


    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addSubmitMember(this.state.inputText)
    }
    onInputChange = (e) =>{
      this.setState({inputText: e.target.value})
    }



    render(){
      return(
      <div className="ui card center-text">
        <div className="content">
          <div className="header">Members</div>
          <form className='ui form' onSubmit={this.handleSubmit}>
            <input className='form-text-input' value={this.state.inputText} onChange={this.onInputChange} type="text"/>
            <button className='ui button add-btn'>Add</button>
          </form>
        <div className="description">
          <p>{this.props.members.map((member, i) =>
            <li onClick={(e)=>{this.removeItem(i)}} key={i}>{member.name}</li>)}</p>
        </div>
        </div>
      </div>
    )
  }
}

export default MembersCard
