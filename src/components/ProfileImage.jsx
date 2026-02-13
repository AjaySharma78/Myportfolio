import React from "react";
function ProfileImage({ className = "" }) {
  return (
    <div className={`${className}`}>
      <img src='/profile.jpg' alt="Logo" className={`${className}`} />
    </div>
  );
}

export default ProfileImage;
