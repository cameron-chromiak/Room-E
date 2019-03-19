import React, {Component} from 'react'
import '../styles/CardsStyle.css'

  class MembersCard extends Component{

    state = {
      members: [],
      inputText: ''
    }

    // addSubmit = (e) =>{
    //   e.preventDefault()
    //   let newMember = this.state.inputText
    //   this.setState({
    //     members: [...this.state.members, newMember],
    //     inputText: ''
    //   }, ()=>{this.getMember()})
    //     //this.getTask()
    //   }
    //
    // getMember = () =>{
    //   // console.log('Task',this.state.task);
    //   this.props.getMember(this.state.members)
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addSubmit(this.state.inputText)
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
          <p>{this.props.members.map((member, i) => <li key={i}>{member}</li>)}</p>
        </div>
        </div>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <input className='form-text-input' value={this.state.inputText} onChange={this.onInputChange} type="text"/>
          <button className='ui button add-btn'>Add</button>
        </form>
      </div>
    )
  }
}

export default MembersCard
