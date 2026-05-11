import Header from "./components/Header.jsx";
import PostCard from "./components/PostCard.jsx";
import { posts } from "./data/posts.js";

export default function App() {
  return (
    <div className="codeagram-app">
      <Header />
      <div className="feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
