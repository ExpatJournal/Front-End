import React, { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";
import FeedCard from "./FeedCard";
import MobileHeader from "./MobileHeader";


const TokenFeed = () => {
  const { allPosts } = useContext(PostsContext);
  // console.log('DummyData', DummyData);
  console.log("token feed posts: ", allPosts);

  return (
    <div className="explore-header">
      <MobileHeader />
      {/* <p>My Feed</p> */}
      <div className="feed-wrapper">
        {allPosts.map(post => (
          <FeedCard
            user={post.title}
            content={post.post}
            location={post.location}
            img={post.media[0].url}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};
export default TokenFeed;
