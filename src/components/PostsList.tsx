import React from 'react'
import { Link } from 'react-router-dom'
import { PostData } from '../interfaces'
import './postsList.css'

interface PostsListsProps {
  allPosts: PostData[] | null
}

const PostsList: React.FC<PostsListsProps> = ({ allPosts }) => {
  return (
    <ul className='posts'>
      {allPosts?.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/${post.id}`}>Lire l&apos;article</Link>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(PostsList)
