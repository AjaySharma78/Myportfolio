import React from "react";
import pencrefLogo from "../assets/profile.jpg";
function ProfileImage({ className = "" }) {
  return (
    <div className={`${className}`}>
      <img src={pencrefLogo} alt="Logo" className={`${className}`} />
    </div>
  );
}

export default ProfileImage;
