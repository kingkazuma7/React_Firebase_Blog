import React, { useEffect, useState } from "react";
import "./CreatePost.scss";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    if (!auth.currentUser) {
      // ユーザーがログインしていない場合の処理
      console.log("ユーザーがログインしていない場合の処理");
      return;
    }
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <h1>記事を投稿する</h1>
      <div className="inputPost">
        <div>タイトル</div>
        <input
          type="text"
          placeholder="タイトルを記入"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputPost">
        <div>投稿</div>
        <textarea
          placeholder="投稿内容記入"
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
      </div>
      <button className="postButton" onClick={createPost}>
        投稿する
      </button>
    </div>
  );
};

export default CreatePost;
