import React from "react";
import "./Home.scss";

function Home() {
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
