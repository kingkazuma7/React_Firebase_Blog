import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import "./Home.scss";

function Home() {
  const [postList, setPostList] = useState([]);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(collection(db, "posts"));
  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getPosts();
  // }, []);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, "posts"), orderBy("createdAt", "desc")));
      const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPostList(posts);
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <div className="nameDeleteButton">
            <h3>{post.author.username}</h3>
            {post.author.id === auth.currentUser?.uid && (
              <button onClick={() => handleDelete(post.id)}>削除</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
