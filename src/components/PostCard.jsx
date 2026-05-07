import { useState } from "react";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";

export function PostCard({ post }) {
  const { avatar, caption, comments, image, likes, tags, timestamp, username } =
    post;
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const displayedLikes = likes + (liked ? 1 : 0);

  return (
    <div className="post-card">
      <div className="post-header">
        <img className="avatar" src={avatar} />
        <h2>{username}</h2>
        <p>{timestamp}</p>
      </div>

      <img className="post-image" src={image} />

      <div className="post-body">
        <button
          className="action-button"
          type="button"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={liked ? "is-active" : ""} />
        </button>
        <button className="action-button" type="button">
          <MessageCircle />
        </button>
        <button className="action-button" type="button">
          <Share2 />
        </button>
        <button
          className="action-button post-bookmark"
          type="button"
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark className={bookmarked ? "is-active" : ""} />
        </button>

        <p className="likes">
          <strong>{displayedLikes.toLocaleString("en-US")}</strong> likes
        </p>
        <p className="caption">
          <strong>{username}</strong> {caption}
        </p>
        <p className="tags">
          {tags.map((tag) => (
            <a href={`/${tag}`} key={tag}>
              #{tag}
            </a>
          ))}
        </p>
        <button className="comments-button" type="button">
          View all {comments} comments
        </button>
      </div>
    </div>
  );
}
