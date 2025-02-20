import React from "react";

const ProfileIcon = ({ style, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.872"
      height="23.456"
      viewBox="0 0 17.872 23.456"
      style={style}
    >
      <path
        id="Path_21"
        data-name="Path 21"
        d="M4,24.456a8.936,8.936,0,0,1,17.872,0H19.638a6.7,6.7,0,0,0-13.4,0ZM12.936,14.4a6.7,6.7,0,1,1,6.7-6.7A6.7,6.7,0,0,1,12.936,14.4Zm0-2.234A4.468,4.468,0,1,0,8.468,7.7,4.467,4.467,0,0,0,12.936,12.17Z"
        transform="translate(-4 -1)"
        fill={fill ? fill : "#212121"}
      />
    </svg>
  );
};

export default ProfileIcon;
