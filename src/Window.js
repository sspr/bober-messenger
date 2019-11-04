import React from 'react';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userOne: '',
            userTwo: '',
            key: this.props.user
        };
    }

    handlePress = (event) => {
        event.preventDefault();

        this.props.onSubmit(event.target.name, this.state[this.props.user], this.state.key)
        this.setState({ key: this.state.key + 1, [this.props.user]: '' });
    }

    renderMessages = () => {
        const messagesHTML = this.props.messages.map((allMessages) =>
            <p key={allMessages.key} className={allMessages.user}>
                {allMessages.message}
            </p>
        );

        return messagesHTML;
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <div className="messages-window">
                    {this.renderMessages()}
                </div>
                <div className="user-form">
                    <input name={this.props.user} type='text' value={this.state[this.props.user]} onChange={this.handleChange} />
                    <input name={this.props.user} type='submit' onClick={this.handlePress} />
                </div>
            </div>
        );
    }
}

export default Window;