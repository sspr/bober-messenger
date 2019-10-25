import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [],
      key: 0,
      userOne: '',
      userTwo: ''
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name;
    
    if(this.state[name] !== ''){
      const arrayOfMessages = this.state.messages;

      arrayOfMessages.push({ user: [name], message: this.state[name], key: this.state.key });
      this.setState({ messages: arrayOfMessages, [name]: '', key: this.state.key + 1 });
    }
  }
  
  handleChange = (event) => {
    const name = event.target.name;
    
    this.setState({ [name]: event.target.value });
  }
  
  renderMessage = (state) => {
    const messagesHTML = this.state.messages.map((allMessages) =>
    <p key={allMessages.key} className={allMessages.user}>
      {allMessages.message}
    </p>
    );

    return messagesHTML;
  }   

  render() {
    return (
      <div>
        <div className="user-1-window">
          <div className="messages-window">
            {this.renderMessage()}
          </div>
          <form name="userOne" className="user-form" onSubmit={this.handleSubmit}>
            <input name='userOne' type='text' value={this.state.userOne} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
        <div className="user-2-window">
          <div className="messages-window">
            {this.renderMessage()}
          </div>
          <form name="userTwo" className="user-form" onSubmit={this.handleSubmit}>
            <input name='userTwo' type='text' value={this.state.userTwo} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Messenger;