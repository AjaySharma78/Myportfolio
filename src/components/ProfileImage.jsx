import React from "react";
function ProfileImage({ className = "" }) {
  return (
    <div className={`${className}`}>
      <img src='https://zykx2x7m0daf6gdp.public.blob.vercel-storage.com/profile.jpg' alt="Logo" className={`${className}`} />
    </div>
  );
}

export default ProfileImage;
