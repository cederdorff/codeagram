import { useState } from "react";
import { Bookmark, Heart } from "lucide-react";
import { UserInfo } from "./UserInfo.jsx";

export function PostCard({ post }) {
  const { avatar, caption, image, likes, timestamp, username } = post;
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const displayedLikes = likes + (liked ? 1 : 0);

  function toggleLike() {
    setLiked(!liked);
  }

  function toggleBookmark() {
    setBookmarked(!bookmarked);
  }

  return (
    <div className="post-card">
      <UserInfo avatar={avatar} timestamp={timestamp} username={username} />

      <img className="post-image" src={image} />

      <div className="post-body">
        <button className="action-button" type="button" onClick={toggleLike}>
          <Heart className={liked ? "is-active" : ""} />
        </button>
        <button className="action-button post-bookmark" type="button" onClick={toggleBookmark}>
          <Bookmark className={bookmarked ? "is-active" : ""} />
        </button>

        <p className="likes">
          <strong>{displayedLikes}</strong> likes
        </p>
        <p className="caption">
          <strong>{username}</strong> {caption}
        </p>
      </div>
    </div>
  );
}
