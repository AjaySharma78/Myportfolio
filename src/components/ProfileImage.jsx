import React from "react";
function ProfileImage({ className = "" }) {
  return (
    <div className={`${className}`}>
      <img src={pencrefLogo} alt="Logo" className={`/profile.jpg`} />
    </div>
  );
}

export default ProfileImage;
