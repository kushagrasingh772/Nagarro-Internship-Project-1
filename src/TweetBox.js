import React,{useState} from 'react';
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import db from "./firebase";
import {collection , addDoc} from "firebase/firestore/lite";
function TweetBox({user}) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    await addDoc(collection(db,"posts"),{
      displayName:user?.displayName,
      username: user?.displayName,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:user.photoURL,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;