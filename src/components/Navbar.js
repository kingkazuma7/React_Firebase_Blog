import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  console.log(isAuth);
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログアウト
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
