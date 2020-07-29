import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css';

function ChatScreen({name, message, profilePic, timestamp}) {

  const [ input, setInput ] = useState('')

  const [messages, setMessages] = useState([
    {
      name: 'Neil deGrasse Tyson',
      image: 'https://media.npr.org/assets/img/2015/10/22/gettyimages-475425810-c4f2d327fc8a7a2f39098dfbae1012cc9040f1d2-s800-c85.jpg',
      messages: 'Hi'
    },
    {
      messages: 'Hey there!'
    },
    {
      name: 'Neil deGrasse Tyson',
      image: 'https://media.npr.org/assets/img/2015/10/22/gettyimages-475425810-c4f2d327fc8a7a2f39098dfbae1012cc9040f1d2-s800-c85.jpg',
      messages: 'Hey, how are you!'
    },
  ])

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { messages: input }]);
    setInput("")
  }
  return(
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Neil deGrasse Tyson on 01/01/2020
      </p>
      {
        messages.map(message => (
          message.name ? (
            <div className="ChatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt = {message.name}
                src = {message.image}
              />
                <p className="ChatScreen__text">{message.messages}</p>
            </div>
          ) : (
            <div className="ChatScreen__message">
                <p className="ChatScreen__textUser">{message.messages}</p>
            </div>
          )
      ))}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chatScreen__inputField"
          type="text"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
      </form>
    </div>
  );
}


export default ChatScreen
