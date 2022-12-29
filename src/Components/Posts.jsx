import React from "react";

function Posts({ posts, loading }) {
  const allPosts = posts.map((post) => {
    return (
      <li key={post.id} className="list-group-item">
        {post.title}
      </li>
    );
  });
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group mb-4">{allPosts}</ul>
      )}
    </div>
  );
}

export default Posts;
