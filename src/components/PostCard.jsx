import { useState } from 'react'
import { Bookmark, EllipsisVertical, Heart, MessageCircle, Share2 } from 'lucide-react'

export function PostCard({ post }) {
  const { avatar, caption, comments, image, likes, tags, timestamp, username } = post
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const displayedLikes = likes + (liked ? 1 : 0)

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="author">
          <img className="avatar" src={avatar} alt={username} />
          <div className="author-copy">
            <h2>{username}</h2>
            <p>{timestamp}</p>
          </div>
        </div>
        <button className="post-menu" type="button">
          <EllipsisVertical />
        </button>
      </div>

      <div className="post-media">
        <img src={image} alt={caption} />
      </div>

      <div className="post-body">
        <div className="post-actions">
          <div className="primary-actions">
            <button
              className="action-button"
              type="button"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={liked ? 'is-active' : ''} />
            </button>
            <button className="action-button" type="button">
              <MessageCircle />
            </button>
            <button className="action-button" type="button">
              <Share2 />
            </button>
          </div>
          <button
            className="action-button"
            type="button"
            onClick={() => setBookmarked(!bookmarked)}
          >
            <Bookmark className={bookmarked ? 'is-active' : ''} />
          </button>
        </div>

        <p className="likes">
          <strong>{displayedLikes.toLocaleString('en-US')}</strong> likes
        </p>
        <p className="caption">
          <strong>{username}</strong> {caption}
        </p>
        <div className="tags">
          {tags.map((tag) => (
            <a href={`/${tag}`} key={tag}>
              #{tag}
            </a>
          ))}
        </div>
        <button className="comments-button" type="button">
          View all {comments} comments
        </button>
      </div>
    </div>
  )
}
