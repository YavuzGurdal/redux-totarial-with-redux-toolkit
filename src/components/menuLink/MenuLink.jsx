import React from "react";
import { useSelector } from "react-redux";
import "./menulink.css";

export default function MenuLink({ icon, text }) {
  const name = useSelector((state) => state.user.userInfo.name)
  // useSelector metodu ile store'a dolayisiyla store icindeki herseye ulasabiliyorum

  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && name && `Hello ( ${name} )`}
      </span>
    </div>
  );
}
