import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Home.scss";

function Home() {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はreact学習中です。ほげほげほげほげ。
        </div>
        <div className="nameDeleteButton">
          <h3>@nasio</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
