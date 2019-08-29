
import React, { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";
import FeedCard from "./FeedCard";
import HamburgerNav from "./HamburgerNav";


const Feed = () => {
  const { allPosts } = useContext(PostsContext);
  // console.log('DummyData', DummyData);

  return (
    <div className="explore-header">
      <HamburgerNav />
      <p>Explore</p>
      <div className="feed-wrapper">

        {allPosts.map(post => (
          <FeedCard
            // user={post.username}
            content={post.content}
            location={post.location}
            img={post.media[0].url}
            key={post.id}
          />
        ))}

      </div>
    </div>
  );
};
export default Feed;
