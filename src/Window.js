import React from 'react';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handlePress = (event) => {
        this.props.onSubmit(event.target.name, this.state.text)
        this.setState({ text: '' });
    }

    renderMessages = () => {
        const messagesHTML = this.props.messages.map((message, index) =>
            <p key={index} className={message.user}>
                {message.message}
            </p>
        );

        return messagesHTML;
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ text: value });
    }

    handleEnterUp = (event) => {
        if (event.keyCode === 13) this.handlePress(event);
    }

    render() {
        return (
            <div>
                <div className="messages-window">
                    {this.renderMessages()}
                </div>
                <div className="user-form">
                    <input name={this.props.user} type='text' value={this.state.text} onChange={this.handleChange} onKeyUp={this.handleEnterUp} />
                    <input name={this.props.user} type='submit' onClick={this.handlePress} />
                </div>
            </div>
        );
    }
}

export default Window;