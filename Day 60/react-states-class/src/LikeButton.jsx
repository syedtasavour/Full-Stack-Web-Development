import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [isCount, setIsCount] = useState(0);
  let toggleLike = () => {
    if (isLiked) {
      setIsCount(isCount - 1);
    } else {
      setIsCount(isCount + 1);
    }
    setIsLiked(!isLiked);
  };

  let lS = { color: "red" };
  return (
    <div>
      <p> {isCount}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={lS}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
