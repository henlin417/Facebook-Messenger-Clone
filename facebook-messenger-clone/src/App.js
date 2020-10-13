import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'; 
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=fN4xw10RNSgAX-0MtoH&_nc_ht=scontent-sjc3-1.xx&oh=e9b77722d014f7bfeed66cfcaa9f67cd&oe=5FA7C933" alt="messenger-logo"/>
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      
      <form className="app__form"> 
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary"  type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form> 
   
      <FlipMove>
      {
        messages.map(({id, message}) =>(
          <Message key={id} username={username} message={message} />
        ))
      } 
      </FlipMove>
    
    </div>
  );
}

export default App;
