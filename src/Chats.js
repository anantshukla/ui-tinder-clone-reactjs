import React from 'react';
import Chat from './Chat';

const Chats = () => {
  return(
    <div>
      <Chat
        name="Neil deGrasse Tyson"
        message="Hey, how are you!"
        timestamp="30 minutes ago"
        profilePic="https://media.npr.org/assets/img/2015/10/22/gettyimages-475425810-c4f2d327fc8a7a2f39098dfbae1012cc9040f1d2-s800-c85.jpg"
      />
      {/*
      <Chat
        name="Tim Berners-Lee"
        message="Hello!"
        timestamp="15 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg"
      />
      <Chat
        name="Carl Sagan"
        message="Hey there!"
        timestamp="45 minutes ago"
        profilePic="https://www.gstatic.com/tv/thumb/persons/72145/72145_v9_ba.jpg"
      />
      <Chat
        name="Sergey Brin"
        message="Hi!"
        timestamp="60 minutes ago"
        profilePic="https://www.biography.com/.image/t_share/MTIwNjA4NjM0MDc3MjE4MzE2/sergey-brin-12103333-2-402.jpg"
      />
      */}
    </div>
  )
}


export default Chats
