import React, { useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'
import FeedCard from './FeedCard'

const Feed = () => {


  const { DummyData } = useContext(PostsContext)
  console.log('DummyData', DummyData);

  return(
  <div className="feed-wrapper">
    {DummyData.map(post => (
      <FeedCard user={post.username} content={post.content} location={post.location} img={post.imgURL} key={post.id} />
    ) )}
  </div>
  )
}
export default Feed
