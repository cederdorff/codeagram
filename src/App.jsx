import "./App.css";

import { Header } from "./components/Header.jsx";
import { PostCard } from "./components/PostCard.jsx";
import { posts } from "./data/posts.js";

function App() {
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

export default App;
