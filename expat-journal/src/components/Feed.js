import React, { useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'
import { Link } from "react-router-dom";
import FeedCard from './FeedCard'
import HamburgerNav from './HamburgerNav'

const Feed = () => {


  const { DummyData } = useContext(PostsContext)
  // console.log('DummyData', DummyData);

  return(
    <div className="explore-header">
      <HamburgerNav />
      <p>Explore</p>
      <div className="feed-wrapper">
        {DummyData.map(post => (
          <FeedCard user={post.username} content={post.content} location={post.location} img={post.imgURL} key={post.id} />
        ) )}
      </div>
    </div>
  )
}
export default Feed
