import React from 'react'
import { Link } from 'react-router-dom'
import { PostData } from '../interfaces'
import './postdetail.scss'

interface PostDetailProps {
  onePost: PostData | null
}

const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
  return (
    <div className='post'>
      <h2>
        Publication N°: <span className='post-id'>{onePost?.id}</span>
      </h2>
      <h3>
        Titre: <span className='post-title'>{onePost?.title}</span>
      </h3>
      <p className='post-body'>{onePost?.body}</p>
      <Link to='/' className='post-link'>
        👈 Retour page principale
      </Link>
    </div>
  )
}

export default React.memo(PostDetail)
