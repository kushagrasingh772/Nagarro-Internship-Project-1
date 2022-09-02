import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import {collection,getDocs} from "firebase/firestore/lite"
import FlipMove from "react-flip-move";

function Feed({user}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getposts=async ()=>{
      const arr=collection(db,'posts');
      const snapshot=await getDocs(arr);
      setPosts(snapshot.docs.map(doc=>(
         doc.data()
      )));
    }
    getposts();
  }, [posts]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox user={user}/>

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;