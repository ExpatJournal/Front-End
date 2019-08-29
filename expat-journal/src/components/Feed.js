import React, { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";
import FeedCard from "./FeedCard";
import HamburgerNav from "./HamburgerNav";
import { Link } from "react-router-dom";

const Feed = () => {
  const { allPosts } = useContext(PostsContext);
  // console.log('DummyData', DummyData);

  return (
    <div className="explore-header">
      <HamburgerNav />
      <p>Explore</p>
      <div className="feed-wrapper">
        {allPosts.map(post => (
          <Link className="link-clear" to={`/PhotoPage/${post.id}`}>
            <FeedCard
              // user={post.username}
              content={post.post}
              location={post.location}
              img={post.media[0].url}
              key={post.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Feed;
