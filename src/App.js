import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [],
      user1LastMessage: '',
      user2LastMessage: '',
    };
  }
  
  user1SendMessage = (event) => {
    event.preventDefault();
    if(this.state.user1LastMessage !== ''){
      //Add last message to array
      const newArrayToPush = this.state.messages;
      newArrayToPush.push('user1' + this.state.user1LastMessage);
      this.setState({messages: newArrayToPush});
      //clear variable containing message and input
      this.setState({user1LastMessage: ''});
      document.getElementById('user1Input').value = '';
    }
  }
  
  user2SendMessage = (event) => {
    event.preventDefault();
    if(this.state.user2LastMessage !== ''){
      //Add last message to array
      const newArrayToPush = this.state.messages;
      newArrayToPush.push('user2' + this.state.user2LastMessage);
      //clear variable containing message and input
      this.setState({user2LastMessage: ''});
      document.getElementById('user2Input').value = '';
    }
  }
  
  user1TypeMessage = (event) => {
    this.setState({user1LastMessage: event.target.value});
  }
  
  user2TypeMessage = (event) => {
    this.setState({user2LastMessage: event.target.value});
  }

  messagesToDisplay = (state) => {
    const messagesHTML = this.state.messages.map((message) =>
    <p key={message.toString()} className={message.slice(0, 5)}>
      {message.slice(5)}
    </p>
    );

    return messagesHTML;
  }   

  render() {
    return (
      <div>
        <div className="user1Window">
          <div className="messagesWindow">
            {this.messagesToDisplay()}
          </div>
          <form 
            className="userForm" 
            onSubmit={this.user1SendMessage}>
            <input
              id="user1Input"
              type='text'
              onChange={this.user1TypeMessage}
            />
            <input
              type='submit'
            />
          </form>
        </div>
        
        <div className="user2Window">
          <div className="messagesWindow">
            {this.messagesToDisplay()}
          </div>
          <form 
            className="userForm" 
            onSubmit={this.user2SendMessage}>
            <input
              id="user2Input"
              type='text'
              onChange={this.user2TypeMessage}
            />
            <input
              type='submit'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Messenger;