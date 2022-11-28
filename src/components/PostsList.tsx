import React from 'react'
import { Link } from 'react-router-dom'
import { PostData } from '../interfaces'
import './postslist.scss'

interface PostsListsProps {
  allPosts: PostData[] | null
}

const PostsList: React.FC<PostsListsProps> = ({ allPosts }) => {
  return (
    <ul className='posts'>
      {allPosts?.map((post) => (
        <li className='list' key={post.id}>
          <h2 className='list-title'>{post.title}</h2>
          <Link className='list-link' to={`/${post.id}`}>
            👉 Lire l&apos;article 👈
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(PostsList)
