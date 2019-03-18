import React, {Component} from 'react'
import '../styles/CardsStyle.css'

  class MembersCard extends Component{

    state = {
      members: [], //from db
      inputText: ''
    }

    addSubmit = (e) =>{
      e.preventDefault()
      let newName = this.state.inputText
      this.setState(prevState => ({
        members: [...prevState.members, newName]
      }))
      console.log(this.state.members);
    }



    onInputChange = (e) =>{
      this.setState({inputText: e.target.value})
    }

    render(){
      return(
      <div className="ui card center-text">
        <div className="content">
          <div className="header">Members</div>
        <div className="description">
          <p>{this.state.members.map((member, i) => <li key={i}>{member}</li>)}</p>
        </div>
        </div>
        <form className='ui form' onSubmit={this.addSubmit}>
          <input className='form-text-input' value={this.state.inputText} onChange={this.onInputChange} type="text"/>
          <button className='ui button add-btn'>Add</button>
        </form>
      </div>
    )
  }
}

export default MembersCard
